import React from "react";
import "./PageButton.scss";

const PageButton = ({ onClick, value }) => {
  return (
    <button className="page-button" onClick={onClick} value={value}>
        {value}
    </button>
  )
}

export default PageButton