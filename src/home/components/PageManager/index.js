import React, { Suspense, useState } from "react";
import Loading from "../Loading";
const About = React.lazy(() => import("../../pages/About"));
const Overview = React.lazy(() => import("../../pages/Overview"));
const Skills = React.lazy(() => import("../../pages/Skills"));
const Experience = React.lazy(() => import("../../pages/Experience"));
const Education = React.lazy(() => import("../../pages/Education"));
const Projects = React.lazy(() => import("../../pages/Projects"));
import NavBar from "./components/NavBar";
import classes from "./style.module.css";

const PageManager = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const getCurrentPage = () => {
    switch (currentPage) {
      case 1:
        return <Overview />;
      case 2:
        return <About />;
      case 3:
        return <Skills />;
      case 4:
        return <Experience />;
      case 5:
        return <Education />;
      case 6:
        return <Projects />;
      default:
        return <Overview />;
    }
  };

  return (
    <Suspense fallback={<Loading />}>
      <div className={classes.main}>
        {getCurrentPage()}
        <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </Suspense>
  );
};

export default PageManager;
