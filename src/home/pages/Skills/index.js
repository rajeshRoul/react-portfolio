import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./style.module.css";
import PropTypes from "prop-types";

const SkillItem = ({ skill }) => {
  const getStyles = () => {
    const { level } = skill;
    let res = { width: `${level}%` };
    if (level <= 50) {
      res.backgroundColor = "#FF8C00";
    } else if (level <= 60) {
      res.backgroundColor = "rgb(131, 133, 31)";
    } else if (level <= 70) {
      res.backgroundColor = "#008B8B";
    } else if (level <= 80) {
      res.backgroundColor = "#8B008B";
    } else if (level <= 90) {
      res.backgroundColor = "#2D81B3";
    } else {
      res.backgroundColor = "#006400";
    }
    return res;
  };

  return (
    <div className={classes.skillCtr} onClick={(e) => e.stopPropagation()}>
      <div className={classes.skillProgress} style={getStyles()} />
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
    level: 90
  },
  {
    name: "NextJs",
    level: 80
  },
  {
    name: "Javascript (ES6)",
    level: 65
  },
  {
    name: "Redux",
    level: 80
  },
  {
    name: "HTML & CSS",
    level: 100
  },
  {
    name: "SASS",
    level: 100
  },
  {
    name: "Java SE",
    level: 70
  },

  {
    name: "Bootstrap",
    level: 100
  },
  {
    name: "Ajax",
    level: 90
  },
  {
    name: "EJS",
    level: 100
  },
  {
    name: "OOPS",
    level: 80
  },
  {
    name: "Node.js",
    level: 70
  },
  {
    name: "Express.js",
    level: 60
  },
  {
    name: "Mongoose ODM",
    level: 60
  },
  {
    name: "Git",
    level: 80
  },
  {
    name: "Github",
    level: 90
  },
  {
    name: "Data Structures",
    level: 80
  },
  {
    name: "Algorithms",
    level: 70
  },
  {
    name: "Material UI",
    level: 90
  },
  {
    name: "Formik",
    level: 80
  }
];
