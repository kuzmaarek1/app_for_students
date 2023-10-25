import React from "react";
import { RotatingSquare, ThreeDots } from "react-loader-spinner";
import { theme } from "theme/constants";

const Loader = ({ component }) => {
  return component == 0 ? (
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
  ) : (
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color={theme.colors.darkGrey}
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  );
};

export default Loader;
