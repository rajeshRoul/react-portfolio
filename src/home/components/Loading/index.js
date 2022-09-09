import StarIcon from "../../../assets/icons/StarIcon.png";
import classes from "./style.module.css";

const Loading = () => {
  return (
    <div className={classes.main}>
      <img className={classes.icon} src={StarIcon} alt="Loading" />
    </div>
  );
};

export default Loading;
