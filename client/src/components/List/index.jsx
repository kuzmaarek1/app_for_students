import React, { useState, useEffect, useRef, useCallback } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Paper from "@mui/material/Paper";
import {
  Button,
  HeaderList,
  ModalForm,
  Loader,
  ModalDetails,
} from "components";
import * as Styles from "./styles";
import notResults from "assets/notResults.png";

const List = ({ header, hook, endpoint, getEndpoint, searchEndpoint }) => {
  const { register, watch, resetField } = useForm();
  const navigate = useNavigate();
  const [details, setDetails] = useState({});
  const [page, setPage] = useState(1);
  const [modalIsOpenDetails, setModalIsOpenDetails] = useState(false);
  const [modalIsOpenFormAdd, setModalIsOpenFormAdd] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const { currentSubject } = useSelector((state) => state.subject);
  const dispatch = useDispatch();

  const getEndpointProps =
    header === "Subject"
      ? { page }
      : { subject: currentSubject.id, page: page };

  const searchEndpointProps =
    header === "Subject"
      ? { name: watch(`${header.toLowerCase()}-search`), page: page }
      : {
          name: watch(`${header.toLowerCase()}-search`),
          subject: currentSubject.id,
          page: page,
        };

  useEffect(() => {
    if (page === 0) {
      setPage(1);
      return;
    }
    if (!watch(`${header.toLowerCase()}-search`)) {
      const getEndpointName =
        header !== "Todolist"
          ? `get${header}s`
          : isDone === true
          ? `get${header}sDone`
          : `get${header}sNotDone`;
      dispatch(
        endpoint.util.prefetch(getEndpointName, getEndpointProps, {
          force: true,
        })
      );
    } else {
      dispatch(
        endpoint.util.prefetch(`search${header}`, searchEndpointProps, {
          force: true,
        })
      );
    }
  }, [watch(`${header.toLowerCase()}-search`), isDone, page]);

  const getEndpointQuery =
    header !== "Todolist" || isDone === false
      ? getEndpoint
      : endpoint.endpoints.getTodolistsDone;

  const { data: dataGet, isFetching: fetchingData } =
    getEndpointQuery.useQueryState(getEndpointProps);

  const { data: dataSearch, isFetching: fetchingSearch } =
    searchEndpoint.useQueryState(searchEndpointProps);

  const tableRow =
    header === "Subject"
      ? ["name", "ects", ""]
      : header === "Note"
      ? ["number", "topic", "date"]
      : header === "Deadline"
      ? ["description", "exam", "date"]
      : ["description"];

  const data = watch(`${header.toLowerCase()}-search`) ? dataSearch : dataGet;

  const fetching = watch(`${header.toLowerCase()}-search`)
    ? fetchingSearch
    : fetchingData;

  const openModalDetails = (dataId) => {
    setModalIsOpenDetails(true);
    const dataFindById = data?.results?.find(({ id }) => id === dataId);
    setDetails(dataFindById);
  };

  const intObserver = useRef();

  const lastRef = useCallback(
    (node) => {
      if (fetchingData || fetchingData) return;

      if (intObserver.current) intObserver.current.disconnect();

      intObserver.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && data?.has_next) {
          setPage((prev) => prev + 1);
        }
      });

      if (node) intObserver.current.observe(node);
    },
    [fetchingData, fetchingSearch, data?.has_next, data]
  );

  return (
    <Styles.Wrapper>
      <HeaderList
        header={header}
        register={register}
        watch={watch}
        setModalIsOpenFormAdd={setModalIsOpenFormAdd}
        isDone={isDone}
        setIsDone={setIsDone}
        setPage={setPage}
      />
      {fetching && page == 1 ? (
        <Styles.LoaderAndErrorWrapper>
          <Loader component={0} />
        </Styles.LoaderAndErrorWrapper>
      ) : data?.results?.length === 0 || !data?.results ? (
        <Styles.LoaderAndErrorWrapper>
          <img src={notResults} />
          Brak danych
        </Styles.LoaderAndErrorWrapper>
      ) : (
        <Styles.TContainer component={Paper}>
          <Styles.TableWrapper
            sx={{
              minWidth: 300,
              fontFamily: ["Montserrat", "sans-serisf"].join(","),
            }}
            size="small"
            aria-label="a dense table"
          >
            <Styles.THead>
              <Styles.TRow>
                {tableRow.map((props) => (
                  <Styles.THeadCell
                    sx={{ fontWeight: "600", fontSize: "20px" }}
                    key={props}
                    align="center"
                  >
                    {props.charAt(0).toUpperCase()}
                    {props.slice(1)}
                  </Styles.THeadCell>
                ))}
              </Styles.TRow>
            </Styles.THead>
            <Styles.TBody>
              {data?.results.map((row, indexData) => {
                return (
                  <Styles.TRow key={row.id} sx={{ "& td": { border: 0 } }}>
                    {Object.entries(row).map(
                      ([key, value], index) =>
                        tableRow.includes(key) &&
                        (data?.results?.length === indexData + 1 &&
                        index === 1 ? (
                          <>
                            <Styles.TBodyCell
                              key={`${row.id}-${key}`}
                              align="center"
                              onClick={() =>
                                header === "Note"
                                  ? navigate(`/notes/${row.id}`)
                                  : openModalDetails(row.id)
                              }
                              value={value}
                              ref={lastRef}
                            >
                              <Styles.TBodyCellBolean value={value}>
                                {key === "exam"
                                  ? value === true
                                    ? "Yes"
                                    : "No"
                                  : String(value)}
                              </Styles.TBodyCellBolean>
                            </Styles.TBodyCell>
                          </>
                        ) : (
                          <>
                            <Styles.TBodyCell
                              key={`${row.id}-${key}`}
                              align="center"
                              onClick={() =>
                                header === "Note"
                                  ? navigate(`/notes/${row.id}`)
                                  : openModalDetails(row.id)
                              }
                              value={value}
                            >
                              <Styles.TBodyCellBolean value={value}>
                                {key === "exam"
                                  ? value === true
                                    ? "Yes"
                                    : "No"
                                  : String(value)}
                              </Styles.TBodyCellBolean>
                            </Styles.TBodyCell>
                          </>
                        ))
                    )}
                    {header === "Subject" && (
                      <Styles.TBodyCell
                        value={true}
                        onClick={() => {
                          header !== "Note" && openModalDetails(row.id);
                        }}
                      >
                        <Button
                          name={
                            currentSubject.id === row.id ? "Current" : "Change"
                          }
                          color={currentSubject.id === row.id ? "red" : "blue"}
                          width="100px"
                          height="30px"
                          onClick={(e) => {
                            if (currentSubject.id !== row.id) {
                              e.stopPropagation();
                              hook.handleChangeSubject(row);
                              setPage(1);
                            }
                          }}
                        />
                      </Styles.TBodyCell>
                    )}

                    {header === "Todolist" && (
                      <Styles.TBodyCell
                        value={true}
                        onClick={() => {
                          header !== "Note" && openModalDetails(row.id);
                        }}
                      >
                        <Button
                          name={
                            isDone ? "Change to Not Done" : "Change to Done"
                          }
                          color={isDone ? "red" : "blue"}
                          width="250px"
                          height="30px"
                          onClick={async (e) => {
                            e.stopPropagation();
                            await hook.handleDoned(row, currentSubject.id, {
                              isDoned: isDone ? false : true,
                            });
                            setIsDone((prev) => !prev);
                          }}
                        />
                      </Styles.TBodyCell>
                    )}
                  </Styles.TRow>
                );
              })}
            </Styles.TBody>
          </Styles.TableWrapper>
        </Styles.TContainer>
      )}
      {(fetchingData || fetchingData) && page !== 1 && (
        <Styles.LoaderMore>
          <Loader component={1} />
        </Styles.LoaderMore>
      )}
      <ModalForm
        header={header}
        modalIsOpen={modalIsOpenFormAdd}
        closeModal={() => setModalIsOpenFormAdd(false)}
        hook={hook}
        subject={currentSubject}
        resetSearch={resetField}
        setPage={setPage}
        endpoint={endpoint}
      />
      {header !== "Note" && (
        <ModalDetails
          header={header}
          hook={hook}
          modalIsOpen={modalIsOpenDetails}
          closeModal={() => setModalIsOpenDetails(false)}
          subject={currentSubject}
          details={details}
          endpoint={endpoint}
          resetSearch={resetField}
          setPage={setPage}
        />
      )}
    </Styles.Wrapper>
  );
};

export default List;
