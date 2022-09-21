import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import ProjectItem from "./components/ProjectItem";
import {
  learningProjects,
  companyProjects,
  personalProjects
} from "./components/ProjectItem/projectsData";
import TabBar from "./components/TabBar";
import classes from "./style.module.css";

const Projects = () => {
  const [selectedTab, setSelectedTab] = useState(1);

  const getProjects = () => {
    switch (selectedTab) {
      case 1:
        return personalProjects;
      case 2:
        return companyProjects;
      case 3:
        return learningProjects;
    }
  };

  useEffect(() => {
    document.getElementById("projectListContainer").scrollTop = 0;
  }, [selectedTab]);

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
        <div className={classes.content} id="projectListContainer">
          {getProjects().map((project, index) => (
            <ProjectItem
              key={`project-${selectedTab}-${index}`}
              data={project}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
