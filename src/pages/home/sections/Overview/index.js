import React, { useLayoutEffect, useState } from "react";
import NameContainer from "./components/nameContainer";
import classes from './style.module.css'

const Overview = () => {
    const [stars, setStars] = useState([]);

    const randomIntFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    useLayoutEffect(() => {
        let stars = [];
        for(let i=0; i<50; ++i){
            stars.push(
                <div 
                    className={classes.star}
                    style={{
                        top: `${randomIntFromInterval(0, 100)}%`,
                        left: `${randomIntFromInterval(0, 100)}%`
                    }} 
                />
            )
        }
        for(let i=0; i<50; ++i){
            stars.push(
                <div 
                    className={classes.starSmall}
                    style={{
                        top: `${randomIntFromInterval(0, 100)}%`,
                        left: `${randomIntFromInterval(0, 100)}%`
                    }} 
                />
            )
        }
        setStars(stars);
    }, [])

    return (
        <div id="overview-container" className={classes.main}>
            {stars}
            <div className={classes.ctr1}>
                <NameContainer
                    name={"Rajesh Roul"}
                    designation={"Software Engineer"}
                />
            </div>
            <div className={classes.ctr2}>

            </div>
        </div>
    )
}

export default Overview;