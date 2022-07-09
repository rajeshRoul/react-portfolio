import React, { useEffect, useRef } from "react";
import StarryBackground from "./components/StarryBackground";
import classes from "./style.module.css";

const Home = () => {
  const divRef = useRef();

  useEffect(() => {
    window.scrollTo(0, divRef.current.offsetTop);
  }, []);

  return (
    <div className={classes.main} id="mains" ref={divRef}>
      <StarryBackground />
    </div>
  );
};

export default React.memo(Home);
