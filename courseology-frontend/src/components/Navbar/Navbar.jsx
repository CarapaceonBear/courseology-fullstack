import React from "react";
import "./Navbar.scss";
import LinkButton from "../LinkButton/LinkButton";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
        <LinkButton link={"/"} text="Home" />
        <LinkButton link={"/browse"} text="Browse Courses" />
        <LinkButton link={"/profile"} text="Profile" />
    </div>
  )
}

export default Navbar