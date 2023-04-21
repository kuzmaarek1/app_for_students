import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { notesApiSlice } from "reducers/notesApiSlice";
import { useNotes } from "hooks/useNotes";
import { Button, Loader, ModalForm } from "components";
import * as Styles from "./styles";

const NotesDetails = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const hook = useNotes();
  const { currentSubject } = useSelector((state) => state.subject);
  const [modalIsOpen, setModalIsOpen] = useState(false);

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
  return (
    <Styles.Wrapper>
      <Styles.HeaderWrapper>
        <Styles.Header>Notes</Styles.Header>
        <Styles.ButtonWrapper>
          <Button
            width="65%"
            height="7vh"
            name={`Add image`}
            onClick={() => setModalIsOpen(true)}
          />
          <Button
            width="65%"
            height="7vh"
            name={`Edit`}
            onClick={() => setModalIsOpen(true)}
          />
          <Button
            width="65%"
            height="7vh"
            name={`Delete`}
            color={`red`}
            onClick={() => setModalIsOpen(true)}
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
      <Styles.ImageWrapper>
        {data &&
          data?.results?.image.map(({ name }) => (
            <Styles.ImageLink
              href={`http://localhost:8000${name}/`}
              key={`${name}`}
            >
              <Styles.Image src={`http://localhost:8000${name}/`} />
            </Styles.ImageLink>
          ))}
      </Styles.ImageWrapper>
      <ModalForm
        header="Image"
        modalIsOpen={modalIsOpen}
        closeModal={() => setModalIsOpen(false)}
        hook={hook}
        subject={currentSubject}
        notesId={params.id}
        //resetSearch={resetField}
      />
    </Styles.Wrapper>
  );
};

export default NotesDetails;
