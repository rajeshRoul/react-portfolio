import React from "react";
import classes from "./style.module.css";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

const NameContainer = ({ name, designation }) => {
  return (
    <div className={classes.main}>
      <span className={classes.name}>{name}</span>
      <div className={classes.designation}>{designation}</div>
      <div style={{ display: "flex" }}>
        <FontAwesomeIcon
          icon={brands("java")}
          size="lg"
          className={classes.toolIcon}
        />
        <FontAwesomeIcon
          icon={brands("js")}
          size="lg"
          className={classes.toolIcon}
        />
        <FontAwesomeIcon
          icon={brands("react")}
          size="lg"
          className={classes.toolIcon}
        />
        <FontAwesomeIcon
          icon={brands("html5")}
          size="lg"
          className={classes.toolIcon}
        />
        <FontAwesomeIcon
          icon={brands("css3")}
          size="lg"
          className={classes.toolIcon}
        />
        <FontAwesomeIcon
          icon={brands("github")}
          size="lg"
          className={classes.toolIcon}
        />
      </div>
    </div>
  );
};

NameContainer.propTypes = {
  name: PropTypes.string,
  designation: PropTypes.string
};

export default React.memo(NameContainer);
