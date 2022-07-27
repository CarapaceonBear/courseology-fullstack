import React from "react";
import "./Splash.scss";
import LinkButton from "../../components/LinkButton/LinkButton";

const Splash = () => {
  return (
    <div className="splash">
      <h1 className="splash__title">Welcome</h1>
      <LinkButton link={"/browse"} text="Browse our courses"/>
    </div>
  )
}

export default Splash