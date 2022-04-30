import React from "react";
import classes from "./style.module.css";
import ProfileImg from "../../../../../../assets/images/ProfileImg.png";

const ProfileContainer = () => {
  return (
    <div className={classes.main}>
      <img src={ProfileImg} alt="" style={{ height: 500 }} />
    </div>
  );
};

export default ProfileContainer;
