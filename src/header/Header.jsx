import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import cart from "./cart.png";
const Header = (props) => {
  const cartCount = () => {
    if (props.burgersArray.length > 0) {
      return props.burgersArray.length;
    } else {
      return null;
    }
  };
  return (
    <div className={styles.header}>
      <div
        className={
          props.burgersArray.length > 0
            ? `${styles.cart}`
            : `${styles.cart} ${styles.noActiveCart}`
        }
      >
        <Link
          to="cart"
          onClick={
            props.burgersArray.length === 0 ? (e) => e.preventDefault() : null
          }
        >
          <img src={cart} alt="cart" />
          <span>{cartCount()}</span>
        </Link>
      </div>
      <div className={styles.auth}>
        <p>login / reg</p>
      </div>
    </div>
  );
};

export default Header;
