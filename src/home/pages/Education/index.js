import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./style.module.css";
import PropTypes from "prop-types";

const EducationItem = ({ education }) => {
  return (
    <div className={classes.itemCtr}>
      <div className={classes.header}>
        <div className={classes.course}>{education.course}</div>
        <div className={classes.duration}>{education.duration}</div>
      </div>
      <div className={classes.header}>
        <div className={classes.instituteName}>{education.institute}</div>
        <div className={classes.grade}>{education.grade}</div>
      </div>
      {education.learnings.length ? (
        <ul style={{ paddingLeft: 20, marginBottom: 0 }}>
          {education.learnings.map((learning, index) => (
            <li className={classes.learning} key={`learning-${index}`}>
              {learning}
            </li>
          ))}
        </ul>
      ) : null}
      {education.certificates.length ? (
        <div className={classes.certificateCtr}>
          <div className={classes.certificateHeading}>Certificates :</div>
          {education.certificates.map((certificate, index) => (
            <a
              className={classes.certificateItem}
              key={`certificate-${index}`}
              href={certificate.link}
              target="_blank"
              rel="noopener noreferrer">
              {certificate.name}
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );
};

EducationItem.propTypes = {
  education: PropTypes.object
};

const Education = () => {
  return (
    <div className={classes.main}>
      <div className={classes.innerCtr}>
        <div className={classes.heading}>
          <FontAwesomeIcon
            icon={solid("university")}
            size="lg"
            className={classes.toolIcon}
          />
          <span>Education and Certifications</span>
        </div>
        <div className={classes.content}>
          {education.map((item, index) => (
            <EducationItem education={item} key={`education-${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;

const education = [
  {
    course: "B.Tech Computer Science and Engineering",
    duration: "Aug 2018 - May 2022",
    institute: "Gulzar Group Of Institutes",
    grade: "7.89 CGPA",
    learnings: [],
    certificates: []
  },
  {
    course: "Front-End Web Development",
    duration: "Dec 2020 - Feb 2021",
    institute: "Coding Ninjas",
    grade: "Score: 100%",
    learnings: [
      "Learned HTML 5, CSS 3, Bootstrap, Responsive Designs, CSS Animations, Javascript (ES6), JQuery, DOM Manipulation",
      "Created a responsive Resume Project with animations",
      "Created Ping Pong Game and several mini projects"
    ],
    certificates: [
      {
        name: "Completion Certificate",
        link: "https://certificate.codingninjas.com/view/7447f9d521f0b750"
      },
      {
        name: "Excellence certificate",
        link: "https://certificate.codingninjas.com/view/653b87b0236a4b0c"
      }
    ]
  },
  {
    course: "Back-End Web Development",
    duration: "Feb 2021 - May 2021",
    institute: "Coding Ninjas",
    grade: "Score: 99.1%",
    learnings: [
      "Learned Node.js, Express.js, Mongoose ODM, EJS, MVC Architecture, Passport.js, SASS, AJAX, Authentication, AWS Deployment, Parallel Jobs and Mailer etc.",
      "Created TODO Application using Express, Mongoose ODM, Node.js and EJS",
      "Created Codeial(A Social Media Web Application) to learn how to create a higly scalable Web Application using Industry Standards"
    ],
    certificates: [
      {
        name: "Completion Certificate",
        link: "https://certificate.codingninjas.com/view/ac5109df0fe0f525"
      },
      {
        name: "Excellence certificate",
        link: "https://certificate.codingninjas.com/view/c34fa5b74d2de7a8"
      }
    ]
  },
  {
    course: "Data Structures in Java",
    duration: "Oct 2020 - Jan 2021",
    institute: "Coding Ninjas",
    grade: "Score: 99.9%",
    learnings: [
      "Learned and implemented Recursion, Time and Space Complexity, Object Oriented Programming, Linear Data Structures, Trees, Advanced Data Structures and Dynamic Programming etc.",
      "Solved a lot of problems using Data Structures and Algorithms"
    ],
    certificates: [
      {
        name: "Completion Certificate",
        link: "https://certificate.codingninjas.com/view/4c2f4a841f777d18"
      },
      {
        name: "Excellence certificate",
        link: "https://certificate.codingninjas.com/view/77ae11bc465294ed"
      }
    ]
  }
];
