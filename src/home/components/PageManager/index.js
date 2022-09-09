import React, { Suspense, useState } from "react";
import Loading from "../Loading";
const About = React.lazy(() => import("../../pages/About"));
const Overview = React.lazy(() => import("../../pages/Overview"));
const Skills = React.lazy(() => import("../../pages/Skills"));
const Experience = React.lazy(() => import("../../pages/Experience"));
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
