import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./style.module.css";
import PropTypes from "prop-types";

const ExperienceItem = ({ experience }) => {
  return (
    <div className={classes.experienceCtr}>
      <div className={classes.title}>
        <span className={classes.name}>{experience.company}</span>
        <span className={classes.duration}>{experience.duration}</span>
      </div>
      <div className={classes.designation}>{experience.designation}</div>
      <ul style={{ paddingLeft: 12, marginBottom: 0 }}>
        {experience.duties.map((duty, index) => (
          <li className={classes.duty} key={`duty${index}`}>
            {duty}
          </li>
        ))}
      </ul>
    </div>
  );
};

ExperienceItem.propTypes = {
  experience: PropTypes.object
};

const Experience = () => {
  return (
    <div className={classes.main}>
      <div className={classes.innerCtr}>
        <div className={classes.heading}>
          <FontAwesomeIcon
            icon={solid("briefcase")}
            size="lg"
            className={classes.toolIcon}
          />
          <span>Experience</span>
        </div>
        <div className={classes.content}>
          <div className={classes.contentInner}>
            <div className={classes.progressCtr}>
              <div className={classes.plane}>
                <FontAwesomeIcon icon={solid("fighter-jet")} size="lg" />
              </div>
              {experiences.map((item, index) => (
                <div
                  key={`progressPoint-${index}`}
                  className={classes.progresspoint}
                />
              ))}
            </div>
            {experiences.map((item, index) => (
              <ExperienceItem key={`experience-${index}`} experience={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

const experiences = [
  {
    company: "Nickelfox Technologies",
    duration: "Dec 2021 - Present",
    designation: "Jr. Software Engineer",
    duties: [
      "Developed 2 projects having Admin and Client Portals using ReactJs, HTML, CSS, Javascript and NextJs.",
      "Our project team got appreciated with Project Team of the Year Award.",
      "Interact with the client every week to give project demo and get feedback on the current progress."
    ]
  },
  {
    company: "Nickelfox Technologies",
    duration: "Sep 2021 - Dec 2021",
    designation: "Software Engineer Trainee",
    duties: [
      "Developed a Hiring Portal Application for the company which is currently being used for the hiring process.",
      "Recognized as Rising Star for Continuous Improvement and doing quality work in projects (Hiring Portal and Rolls).",
      "Had a major contribution in stabilizing Hiring Portal Project by using techniques like code-splitting, lazy loading and other best practices"
    ]
  },
  {
    company: "Nickelfox Technologies",
    duration: "June 2021 - Sep 2021",
    designation: "Software Developer Intern",
    duties: [
      "Created several mini projects as assignments using ReactJs, NextJs, TypeScript, Javascript, HTML, CSS, Material UI, Firebase and React Testing Library",
      "Learned best coding practices, industry standards and code optimization techniques."
    ]
  }
];
