import React from "react";
import "./Splash.scss";
import LinkButton from "../../components/LinkButton/LinkButton";
import SignIn from "../SignIn/SignIn";

const Splash = ({ user, changeUser }) => {
  return (
    <div className="splash">
      <h1 className="splash__title">Welcome</h1>
      { user ? 
        <LinkButton link={"/browse"} text="Browse our courses"/>
        :
        <SignIn changeUser={changeUser} />
      }
    </div>
  )
}

export default Splash