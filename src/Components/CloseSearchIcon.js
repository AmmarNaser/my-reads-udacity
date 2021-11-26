import { Link } from "react-router-dom";
import React from "react";

const CloseSearchIcon = () => {
  return (
    <Link className="close-search" to={"/"}>
      Close
    </Link>
  );
};

export default CloseSearchIcon;
