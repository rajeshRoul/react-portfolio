import classes from "../style.module.css";
import PropTypes from "prop-types";

const TabBar = ({ selectedTab, setSelectedTab }) => {
  const onTabClick = (e, id) => {
    e.stopPropagation();
    setSelectedTab(id);
  };
  return (
    <div className={classes.projectNavBar}>
      {navItems.map((item, index) => (
        <div
          key={`navItem-${index}`}
          className={selectedTab === item.id ? classes.active : ""}
          onClick={(e) => onTabClick(e, item.id)}>
          {item.name}
        </div>
      ))}
    </div>
  );
};

TabBar.propTypes = {
  selectedTab: PropTypes.number,
  setSelectedTab: PropTypes.func
};

export default TabBar;

const navItems = [
  {
    id: 1,
    name: "Personal"
  },
  {
    id: 2,
    name: "Company"
  },
  {
    id: 3,
    name: "Learning"
  }
];
