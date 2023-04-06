import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import Paper from "@mui/material/Paper";
import { Button, HeaderList } from "components";
import * as Styles from "./styles";

const List = ({ header, hook, endpoint, getEndpoint }) => {
  const { register, watch, setFocus, resetField } = useForm();
  const { currentSubject } = useSelector((state) => state.subject);
  const dispatch = useDispatch();
  const getEndpointProps =
    header === "Subject" ? { undefined } : { id: currentSubject.id };

  useEffect(() => {
    dispatch(endpoint.util.resetApiState());
    dispatch(
      endpoint.util.prefetch(`get${header}s`, getEndpointProps, {
        force: true,
      })
    );
  }, []);

  const { data, isFetching: fetchingData } =
    getEndpoint.useQueryState(getEndpointProps);

  console.log(data);
  const tableRow = header === "Subject" ? ["name", "ects", ""] : [];

  return (
    <Styles.Wrapper>
      <HeaderList header={header} register={register} watch={watch} />
      <Styles.TContainer component={Paper}>
        <Styles.TableWrapper
          sx={{
            minWidth: 650,
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
                          onClick={() => console.log("click")}
                        >
                          {value}
                        </Styles.TBodyCell>
                      )
                  )}
                  {header === "Subject" && (
                    <Styles.TBodyCell
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        maxWidth: 70,
                        margin: "auto",
                        textAlign: "center",
                      }}
                      onClick={() => console.log("click")}
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
    </Styles.Wrapper>
  );
};

export default List;
