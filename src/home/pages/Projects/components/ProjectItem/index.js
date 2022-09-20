import classes from "./style.module.css";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands, solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const ProjectItem = ({ data }) => {
  return (
    <div className={classes.container}>
      <div className={classes.heading}>{data.title}</div>
      <div className={classes.innerCtr}>
        <div className={classes.projectOverviewCtr}>
          <img src={data.image} className={classes.projectImg} />
          <div className={classes.techStack}>
            <span className={classes.heading}>Tech Used:</span>
            <span className={classes.description}>{data.techUsed}</span>
          </div>
        </div>
        <div className={classes.overViewCtr}>
          {data.description.map((description, index) => (
            <div
              className={classes.projectDescription}
              key={`description-${index}`}>
              {description}
            </div>
          ))}
          <div className={classes.btnCtr}>
            {data.github ? (
              <a
                href={data.github}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.actionButton}>
                <div>
                  <div
                    className={classes.filler}
                    style={{ backgroundColor: "#1b1b1b" }}
                  />
                  <div className={classes.btnInnerCtr}>
                    <FontAwesomeIcon icon={brands("github")} size="lg" />
                    <span>Visit Github</span>
                  </div>
                </div>
              </a>
            ) : null}
            {data.liveProject ? (
              <a
                href={data.liveProject}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.actionButton}>
                <div>
                  <div
                    className={classes.filler}
                    style={{ backgroundColor: "#bb0000" }}
                  />
                  <div className={classes.btnInnerCtr}>
                    <FontAwesomeIcon icon={solid("rocket")} size="lg" />
                    <span>Live Project</span>
                  </div>
                </div>
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectItem.propTypes = {
  data: PropTypes.object
};

export default ProjectItem;
