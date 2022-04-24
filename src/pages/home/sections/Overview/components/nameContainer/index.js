import React from "react";
import classes from "./style.module.css";

const NameContainer = ({name, designation}) => {
    return(
        <div className={classes.main}>
            <span className={classes.name}>
                {name}
            </span>
            <div className={classes.designation}>
                {designation}
            </div>
        </div>
    )
    
}

export default NameContainer; 