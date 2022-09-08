import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import classes from "./style.module.css";
import PropTypes from "prop-types";

const NavBar = ({ currentPage, setCurrentPage }) => {
  const onNavClick = (e, page) => {
    e.stopPropagation();
    setCurrentPage(page);
  };

  const getActiveStyle = (itemPage) =>
    itemPage === currentPage ? classes.active : "";

  return (
    <div className={classes.navBar}>
      {navItems.map((item, index) => (
        <div
          key={`navItem-${index}`}
          className={`${classes.icon} ${getActiveStyle(index + 1)}`}
          onClick={(e) => onNavClick(e, item.page)}>
          <FontAwesomeIcon icon={item.icon} size="lg" />
          {item.label ? (
            <div className={classes.label}>{item.label}</div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

NavBar.propTypes = {
  currentPage: PropTypes.number,
  setCurrentPage: PropTypes.func
};

export default React.memo(NavBar);

const navItems = [
  {
    page: 1,
    icon: solid("user")
  },
  {
    page: 2,
    icon: solid("info"),
    label: "About Me"
  },
  {
    page: 3,
    icon: solid("chalkboard-user"),
    label: "Skills"
  }
];
