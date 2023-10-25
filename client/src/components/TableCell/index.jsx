import React from "react";
import * as Styles from "components/List/styles";

const TableCell = React.forwardRef(({ isExam, id, value, onClick }, ref) => {
  return ref ? (
    <Styles.TBodyCell
      key={id}
      align="center"
      onClick={onClick}
      value={value}
      ref={ref}
    >
      <Styles.TBodyCellBolean value={value}>
        {isExam ? (value === true ? "Yes" : "No") : String(value)}
      </Styles.TBodyCellBolean>
    </Styles.TBodyCell>
  ) : (
    <Styles.TBodyCell key={id} align="center" onClick={onClick} value={value}>
      <Styles.TBodyCellBolean value={value}>
        {isExam ? (value === true ? "Yes" : "No") : String(value)}
      </Styles.TBodyCellBolean>
    </Styles.TBodyCell>
  );
});

export default TableCell;
