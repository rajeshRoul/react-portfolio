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
      <div
        key={`starBig${e.clientX - e.clientY}post`}
        className={classes.starIcon}
        style={{
          top: `${e.clientY - 15}px`,
          left: `${e.clientX - 3}px`
        }}>
        <img
          src={StarIcon}
          alt=""
          style={{ height: "0.5rem", width: "0.5rem" }}
        />
      </div>
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
            top: `${randomIntFromInterval(0, 100)}%`,
            left: `${randomIntFromInterval(0, 100)}%`,
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
            top: `${randomIntFromInterval(0, 100)}%`,
            left: `${randomIntFromInterval(0, 100)}%`,
            animationDelay: `${randomIntFromInterval(0, 3)}s`
          }}
        />
      );
    }
    for (let i = 0; i < 10; ++i) {
      stars.push(
        <div
          key={`starIcon${i}pre`}
          className={classes.starIcon}
          style={{
            top: `${randomIntFromInterval(0, 100)}%`,
            left: `${randomIntFromInterval(0, 100)}%`,
            animationDelay: `${randomIntFromInterval(0, 3)}s`
          }}>
          <img
            src={StarIcon}
            alt=""
            style={{ height: "0.5rem", width: "0.5rem" }}
          />
        </div>
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
      <div className={classes.moon}></div>
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
