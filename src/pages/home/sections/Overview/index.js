import React, { useLayoutEffect, useState } from "react";
import NameContainer from "./components/nameContainer";
import classes from "./style.module.css";
import StarIcon from "../../../../assets/icons/StarIcon.png";
import ProfileContainer from "./components/profileContainer";

const Overview = () => {
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
        className={classes.starIcon}
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
    for (let i = 0; i < 60; ++i) {
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
    for (let i = 0; i < 40; ++i) {
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
    for (let i = 0; i < 10; ++i) {
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

  useLayoutEffect(() => {
    initializeStars();
  }, []);

  return (
    <div
      id="overview-container"
      className={classes.main}
      onClick={handleAddStar}>
      {stars} {userStars}
      <div className={classes.moon} />
      <div className={classes.ctr1}>
        <NameContainer name={"Rajesh Roul"} designation={"Software Engineer"} />
      </div>
      <div className={classes.ctr2}>
        <ProfileContainer />
      </div>
    </div>
  );
};

export default Overview;
