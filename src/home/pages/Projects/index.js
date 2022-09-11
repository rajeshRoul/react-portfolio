import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import ProjectItem from "./components/ProjectItem";
import TabBar from "./components/TabBar";
import classes from "./style.module.css";

const Projects = () => {
  const [selectedTab, setSelectedTab] = useState(1);

  return (
    <div className={classes.main}>
      <div className={classes.innerCtr}>
        <div className={classes.heading}>
          <FontAwesomeIcon
            icon={solid("rocket")}
            size="lg"
            className={classes.toolIcon}
          />
          <span>Projects</span>
        </div>
        <TabBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className={classes.content}>
          <ProjectItem />
        </div>
      </div>
    </div>
  );
};

export default Projects;
