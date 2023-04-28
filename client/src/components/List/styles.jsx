import styled, { css } from "styled-components";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";

export const Wrapper = styled.div`
  width: 100%;
  height: 92.5vh;
  overflow: auto;
  color: #303030;
  background-color: ${({ theme }) => theme.colors.lightGrey};
`;

export const LoaderAndErrorWrapper = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const TableWrapper = styled(Table)`
  border: 0px;
`;

export const TContainer = styled(TableContainer)``;

export const THead = styled(TableHead)`
  background-color: ${({ theme }) => theme.colors.lightGrey};
`;

export const TRow = styled(TableRow)``;

export const THeadCell = styled(TableCell)``;

export const TBody = styled(TableBody)`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  tr:nth-child(2n + 1) {
    background-color: ${({ theme }) => theme.colors.grey};
  }
`;

export const TBodyCell = styled(TableCell)`
  cursor: pointer;
  margin: auto;
  ${({ value }) =>
    (value === true || value === false) &&
    css`
      width: 150px;
    `};
`;

export const TBodyCellBolean = styled.div`
  ${({ value }) =>
    (value === true || value === false) &&
    css`
      width: 100%;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: ${({ value, theme }) =>
        `1px solid ${value === true ? theme.colors.blue : theme.colors.red}`};
      background-color: ${({ value, theme }) =>
        `${value === true ? theme.colors.lightBlue : theme.colors.lightRed}`};
      color: ${({ value, theme }) =>
        `${value === true ? theme.colors.blue : theme.colors.red}`};
    `};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
