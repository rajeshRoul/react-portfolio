import classes from "./style.module.css";

const ProjectItem = () => {
  return (
    <div className={classes.container}>
      <div className={classes.heading}>Full Stack Project</div>
      <div className={classes.innerCtr}>
        <img
          src="https://rajeshroul.github.io/pics/project-portfolio.jpg"
          className={classes.projectImg}
        />
        <div className={classes.techStack}>
          <span className={classes.heading}>Tech Used:</span>
          <span className={classes.description}>
            HTML, CSS, Javascript, Bootstrap, React, Java, AWS, VSCode, Vercel
          </span>
        </div>
        <div className={classes.overViewCtr}></div>
      </div>
    </div>
  );
};

export default ProjectItem;
