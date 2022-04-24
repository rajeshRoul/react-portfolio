import React from "react";
import NameContainer from "./components/nameContainer";
import classes from './style.module.css'

const Overview = () => {
    return (
        <div className={classes.main}>
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