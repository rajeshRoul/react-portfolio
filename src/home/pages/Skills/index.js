import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./style.module.css";
import PropTypes from "prop-types";

const SkillItem = ({ skill }) => {
  return (
    <div className={classes.skillCtr}>
      <div className={classes.skillProgress} />
      <div className={classes.skillLabel}>{skill.name}</div>
    </div>
  );
};

SkillItem.propTypes = {
  skill: PropTypes.object
};

const Skills = () => {
  return (
    <div className={classes.main}>
      <div className={classes.innerCtr}>
        <div className={classes.heading}>
          <FontAwesomeIcon
            icon={solid("chalkboard-user")}
            size="lg"
            className={classes.toolIcon}
          />
          <span>Skills</span>
        </div>
        <div className={classes.content}>
          {skills.map((skill, index) => (
            <SkillItem skill={skill} key={`skill-${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

const skills = [
  {
    name: "ReactJs",
    level: 80
  },
  {
    name: "Javascript",
    level: 80
  },
  {
    name: "HTML & CSS",
    level: 90
  }
];
