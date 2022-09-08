import React, { useState } from "react";
import About from "../../pages/About";
import Overview from "../../pages/Overview";
import Skills from "../../pages/Skills";
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
      default:
        return <Overview />;
    }
  };

  return (
    <div className={classes.main}>
      {getCurrentPage()}
      <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default PageManager;
