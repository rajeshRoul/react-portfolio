import React from "react";
import classes from "./style.module.css";
import PropTypes from "prop-types";

const NameContainer = ({ name, designation }) => {
  return (
    <div className={classes.main}>
      <span className={classes.name}>{name}</span>
      <div className={classes.designation}>{designation}</div>
    </div>
  );
};

NameContainer.propTypes = {
  name: PropTypes.string,
  designation: PropTypes.string
};

export default NameContainer;
