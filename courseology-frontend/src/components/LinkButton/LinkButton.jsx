import React from "react";
import "./LinkButton.scss";
import { Link } from "react-router-dom";

const LinkButton = ({ link, text }) => {
  return (
    <>
        <Link to={link}>
            <h1 className="link-button">{text}</h1>
        </Link>
    </>
  )
}

export default LinkButton