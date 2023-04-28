import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { notesApiSlice } from "reducers/notesApiSlice";
import { useNotes } from "hooks/useNotes";
import { Button, Loader, ModalForm } from "components";
import * as Styles from "./styles";
import "react-lazy-load-image-component/src/effects/blur.css";

const NotesDetails = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const hook = useNotes();
  const { currentSubject } = useSelector((state) => state.subject);
  const [modalImageIsOpen, setModalImageIsOpen] = useState(false);
  const [modalEditIsOpen, setModalEditIsOpen] = useState(false);

  useEffect(() => {
    dispatch(
      notesApiSlice.util.prefetch(
        `getNote`,
        { subject: currentSubject.id, id: params.id },
        {
          force: true,
        }
      )
    );
  }, [params.id]);

  const { data, isFetching } = notesApiSlice.endpoints.getNote.useQueryState({
    subject: currentSubject.id,
    id: params.id,
  });

  console.log(data);

  const handleDelete = async () => {
    await hook.handleDelete(data.results, currentSubject?.id);
    navigate("/notes");
  };

  const handleDeleteImage = async (id) => {
    await hook.handleDeleteImage(id);
  };

  return (
    <Styles.Wrapper>
      <Styles.HeaderWrapper>
        <Styles.Header>Notes</Styles.Header>
        <Styles.ButtonWrapper>
          <Button
            width="65%"
            height="7vh"
            name={`Add image`}
            onClick={() => setModalImageIsOpen(true)}
          />
          <Button
            width="65%"
            height="7vh"
            name={`Edit`}
            onClick={() => setModalEditIsOpen(true)}
          />
          <Button
            width="65%"
            height="7vh"
            name={`Delete`}
            color={`red`}
            onClick={() => handleDelete()}
          />
        </Styles.ButtonWrapper>
      </Styles.HeaderWrapper>

      {isFetching && !data ? (
        <Styles.LoaderWrapper>
          <Loader />
        </Styles.LoaderWrapper>
      ) : (
        <>
          <Styles.DetailsWrapper>
            {data &&
              Object.entries(data?.results).map(
                ([key, value], index) =>
                  ["number", "topic", "description", "date"].includes(key) && (
                    <React.Fragment key={`${key}-${index}`}>
                      <Styles.Details
                        boldText={true}
                        description={key === "description"}
                      >
                        {key[0].toUpperCase()}
                        {key.slice(1).replace("_", " ")}
                      </Styles.Details>
                      <Styles.Details description={key === "description"}>
                        {String(value)}
                      </Styles.Details>
                    </React.Fragment>
                  )
              )}
          </Styles.DetailsWrapper>
        </>
      )}
      <Styles.ImagesWrapper>
        {data &&
          data?.results?.image.map(({ id, name }) => (
            <Styles.ImageWrapper key={`${name}`}>
              <Styles.ImageLink
                onClick={(e) => e.stopPropagation()}
                href={`http://localhost:8000${name}/`}
              >
                <Styles.Image
                  effect="blur"
                  src={`http://localhost:8000${name}/`}
                />
              </Styles.ImageLink>
              <Styles.CloseButton
                onClick={() => {
                  handleDeleteImage(id);
                }}
              />
            </Styles.ImageWrapper>
          ))}
      </Styles.ImagesWrapper>
      <ModalForm
        header="Image"
        modalIsOpen={modalImageIsOpen}
        closeModal={() => setModalImageIsOpen(false)}
        hook={hook}
        subject={currentSubject}
        notesId={params.id}
      />
      <ModalForm
        header="Note"
        modalIsOpen={modalEditIsOpen}
        closeModal={() => setModalEditIsOpen(false)}
        hook={hook}
        subject={currentSubject}
        notesId={params.id}
        details={data?.results}
      />
    </Styles.Wrapper>
  );
};

export default NotesDetails;
