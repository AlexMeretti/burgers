import styles from "./ElementBurger.module.scss";

const ElementBurger = (props) => {
  return (
    <div className={styles.block}>
      <div className={styles.title}>
        <p>{props.name}</p>
      </div>
      <div className={styles.image}>
        <img src={props.img} alt={props.name} />
      </div>
      <div className={styles.price}>
        <p>
          <span>{props.burgerPrice} $</span>
        </p>
      </div>
      <div className={styles.supplements}>
        <ul>
          <li>cutlet: {props.cutlet}</li>
          <li>cheese: {props.cheese}</li>
          <li>crispyOnion: {props.crispyOnion}</li>
        </ul>
      </div>
      <div className={styles.remove}>
        <button onClick={() => props.removeBurger(props.id)}>X</button>
      </div>
    </div>
  );
};

export default ElementBurger;
