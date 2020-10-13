import React from "react";
import Loader from "react-loader-spinner";

const Buffer = ({ isActive, isFromModal }) => {
  let css = isFromModal ? "load_modal_css" : "load_css";
  let loader = isActive ? (
    <div className={css}>
      <Loader type="ThreeDots" color="#808080" height="100" width="100" />
    </div>
  ) : (
    <div></div>
  );
  return loader;
};

export default Buffer;
