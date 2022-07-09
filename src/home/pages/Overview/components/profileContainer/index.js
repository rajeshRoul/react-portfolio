import React from "react";
import classes from "./style.module.css";
import ProfileImg from "../../../../../assets/images/ProfileImg.png";

const ProfileContainer = () => {
  return (
    <div className={classes.main}>
      <img
        src={ProfileImg}
        alt=""
        key="profilePic"
        style={{ height: 500 }}
        className={classes.profileImg}
      />
    </div>
  );
};

export default React.memo(ProfileContainer);
