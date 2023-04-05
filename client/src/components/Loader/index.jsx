import React from "react";
import { RotatingSquare } from "react-loader-spinner";
import { theme } from "theme/constants";

const Loader = () => {
  return (
    <RotatingSquare
      height="100"
      width="100"
      color={theme.colors.darkGrey}
      ariaLabel="rotating-square-loading"
      strokeWidth="4"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};

export default Loader;
