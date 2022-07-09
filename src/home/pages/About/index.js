import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import classes from "./style.module.css";

const About = () => {
  return (
    <div className={classes.main}>
      <div className={classes.heading}>
        <FontAwesomeIcon
          icon={solid("user")}
          size="lg"
          className={classes.toolIcon}
        />
        <span>About Me</span>
      </div>
      <div className={classes.aboutText}>
        A Software Engineer with a passion for Web Application Development.
        Skilled in conceptualizing, designing, development, optimizing and
        deploying software containing logical and mathematical solutions to
        business problems. Able to effectively self-manage during independent
        projects, as well as collaborate as part of a productive team.
      </div>
    </div>
  );
};

export default About;
