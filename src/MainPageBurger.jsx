import { Link } from "react-router-dom";
import styles from "./MainPageBurger.module.scss";
const MainPageBurger = (props) => {
  return (
    <div className={styles.block}>
      <Link to={props.link}>
        <img src={props.image} alt={props.name} />
        <p className={styles.title}>{props.name}</p>
        <p>
          <span>{props.price} $</span>
        </p>
      </Link>
    </div>
  );
};

export default MainPageBurger;
