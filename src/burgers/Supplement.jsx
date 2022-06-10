import styles from "./Supplement.module.scss";

const Supplement = (props) => {
  return (
    <div className={styles.block}>
      <div className={styles.image}>
        <img src={props.image} alt={props.name} />
      </div>
      <p className={styles.title}>{props.name}</p>
      <p className={styles.price}>{props.price} $</p>
      <div>{props.button}</div>
    </div>
  );
};

export default Supplement;
