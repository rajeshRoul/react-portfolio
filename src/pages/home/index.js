import React, { useEffect, useRef } from "react";
import About from "./sections/About";
import Overview from "./sections/Overview";
import classes from "./style.module.css";

const Home = () => {
  const divRef = useRef();

  useEffect(() => {
    window.scrollTo(0, divRef.current.offsetTop);
  }, []);

  return (
    <div className={classes.main} id="mains" ref={divRef}>
      <Overview />
      <About />
    </div>
  );
};

export default Home;
