import { Link } from "react-router-dom";
import React from "react";

const OpenSearchIcon = () => {
  return (
    <Link className="open-search" to={"/search"}>
      <button>Add a Book</button>
    </Link>
  );
};

export default OpenSearchIcon;
