import React, { useEffect, useLayoutEffect, useState } from "react";
import classes from "./style.module.css";
import StarIcon from "../../../assets/icons/StarIcon.png";
import PageManager from "../PageManager";

const StarryBackground = () => {
  const [stars, setStars] = useState([]);
  const [userStars, setUserStars] = useState([]);

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const handleAddStar = (e) => {
    setUserStars((prev) => [
      ...prev,
      <img
        key={`starBig${e.timeStamp}post`}
        className={`${classes.starIcon} ${classes.addStar}`}
        src={StarIcon}
        alt=""
        style={{
          top: `${e.pageY - 4}px`,
          left: `${e.pageX - 4}px`
        }}
      />
    ]);
  };

  const initializeStars = () => {
    let stars = [];
    for (let i = 0; i < 80; ++i) {
      stars.push(
        <div
          key={`star${i}pre`}
          className={classes.star}
          style={{
            top: `calc(${randomIntFromInterval(0, 100)}% - 0.15rem)`,
            left: `calc(${randomIntFromInterval(0, 100)}% - 0.15rem)`,
            animationDelay: `${randomIntFromInterval(0, 3)}s`
          }}
        />
      );
    }
    for (let i = 0; i < 60; ++i) {
      stars.push(
        <div
          key={`starSmall${i}pre`}
          className={classes.starSmall}
          style={{
            top: `calc(${randomIntFromInterval(0, 100)}% - 0.1rem)`,
            left: `calc(${randomIntFromInterval(0, 100)}% - 0.1rem)`,
            animationDelay: `${randomIntFromInterval(0, 3)}s`
          }}
        />
      );
    }
    for (let i = 0; i < 25; ++i) {
      stars.push(
        <img
          src={StarIcon}
          alt=""
          key={`starIcon${i}pre`}
          className={classes.starIcon}
          style={{
            top: `calc(${randomIntFromInterval(0, 100)}% - 1rem)`,
            left: `calc(${randomIntFromInterval(0, 100)}% - 1rem)`,
            animationDelay: `${randomIntFromInterval(0, 3)}s`
          }}
        />
      );
    }
    setStars(stars);
  };

  useEffect(() => {}, []);

  useLayoutEffect(() => {
    initializeStars();
  }, []);

  return (
    <div
      id="overview-container"
      className={classes.main}
      onClick={handleAddStar}>
      <div className={classes.orbit}>{stars}</div>
      <div className={classes.userStarsCtr}>{userStars}</div>
      <div className={classes.mainContent}>
        <div className={classes.moon} />
        <PageManager />
      </div>
    </div>
  );
};

export default StarryBackground;
