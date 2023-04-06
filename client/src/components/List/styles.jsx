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

export const TableWrapper = styled(Table)``;

export const TContainer = styled(TableContainer)``;

export const THead = styled(TableHead)``;

export const TRow = styled(TableRow)``;

export const THeadCell = styled(TableCell)``;

export const TBody = styled(TableBody)`
  tr:nth-child(2n + 1) {
    background-color: ${({ theme }) => theme.colors.grey};
  }
`;

export const TBodyCell = styled(TableCell)`
  cursor: pointer;
  margin: auto;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
