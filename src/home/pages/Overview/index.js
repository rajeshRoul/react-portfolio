import React from "react";
import NameContainer from "./components/nameContainer";
import classes from "./style.module.css";
import ProfileContainer from "./components/profileContainer";

const Overview = () => {
  return (
    <div className={classes.main}>
      <div className={classes.ctr1}>
        <NameContainer name={"Rajesh Roul"} designation={"Software Engineer"} />
      </div>
      <div className={classes.ctr2}>
        <ProfileContainer />
      </div>
    </div>
  );
};

export default React.memo(Overview);
