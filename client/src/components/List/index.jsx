import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
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

const List = ({ header, hook, endpoint, getEndpoint, searchEndpoint }) => {
  const { register, watch, resetField } = useForm();
  const [details, setDetails] = useState({});
  const [modalIsOpenDetails, setModalIsOpenDetails] = useState(false);
  const [modalIsOpenFormAdd, setModalIsOpenFormAdd] = useState(false);
  const { currentSubject } = useSelector((state) => state.subject);
  const dispatch = useDispatch();
  const getEndpointProps =
    header === "Subject" ? { undefined } : currentSubject.id;

  const searchEndpointProps =
    header === "Subject"
      ? watch(`${header.toLowerCase()}-search`)
      : {
          name: watch(`${header.toLowerCase()}-search`),
          subject: currentSubject.id,
        };
  useEffect(() => {
    if (!watch(`${header.toLowerCase()}-search`)) {
      dispatch(
        endpoint.util.prefetch(`get${header}s`, getEndpointProps, {
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
  }, [watch(`${header.toLowerCase()}-search`)]);

  const { data: dataGet, isFetching: fetchingData } =
    getEndpoint.useQueryState(getEndpointProps);

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
  console.log(data);

  const openModalDetails = (dataId) => {
    setModalIsOpenDetails(true);
    const dataFindById = data?.results?.find(({ id }) => id === dataId);
    setDetails(dataFindById);
  };

  return (
    <Styles.Wrapper>
      <HeaderList
        header={header}
        register={register}
        watch={watch}
        setModalIsOpenFormAdd={setModalIsOpenFormAdd}
      />
      {fetching ? (
        <Styles.LoaderWrapper>
          <Loader />
        </Styles.LoaderWrapper>
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
              {data?.results.map((row) => {
                return (
                  <Styles.TRow key={row.id} sx={{ "& td": { border: 0 } }}>
                    {Object.entries(row).map(
                      ([key, value]) =>
                        tableRow.includes(key) && (
                          <Styles.TBodyCell
                            key={`${row.id}-${key}`}
                            align="center"
                            onClick={() =>
                              header !== "Note" && openModalDetails(row.id)
                            }
                            value={value}
                          >
                            <Styles.TBodyCellBolean value={value}>
                              {String(value)}
                            </Styles.TBodyCellBolean>
                          </Styles.TBodyCell>
                        )
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
                            }
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
      <ModalForm
        header={header}
        modalIsOpen={modalIsOpenFormAdd}
        closeModal={() => setModalIsOpenFormAdd(false)}
        hook={hook}
        subject={currentSubject}
        resetSearch={resetField}
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
        />
      )}
    </Styles.Wrapper>
  );
};

export default List;
