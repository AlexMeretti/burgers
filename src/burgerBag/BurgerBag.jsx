import styles from "./BurgerBag.module.scss";
import { Link } from "react-router-dom";
import ElementBurger from "./ElementBurger";
import { useState } from "react";
const BurgerBag = (props) => {
  const [name, setName] = useState("Stranger");
  const onChangeName = (e) => {
    setName(e.currentTarget.value);
  };
  const elementBurgerMap = props.burgersArray.map((el) => (
    <ElementBurger
      name={el.name}
      key={el.id}
      id={el.id}
      cheese={el.cheese}
      cutlet={el.cutlet}
      crispyOnion={el.crispyOnion}
      burgerPrice={el.burgerPrice}
      img={el.img}
      removeBurger={props.removeBurger}
    />
  ));
  const submitBag = (event) => {
    event.preventDefault();
    alert(`Thx for your order, ${name}`);
    props.clearCart();
  };
  const finalPrice = () => {
    const massive = props.burgersArray.map((el) => {
      return Number(el.burgerPrice);
    });
    const sumWithInitial = massive.reduce(
      (prevValue, currValue) => prevValue + currValue
    );
    return sumWithInitial.toFixed(2);
  };

  const completeOrder = () => {
    return (
      <div className={styles.complete}>
        <p>
          Total price <span>{finalPrice()} $</span>
        </p>
        <form>
          <input
            id="inputName"
            placeholder="Enter name"
            value={name}
            onChange={onChangeName}
          ></input>
          <button onClick={submitBag}>Send</button>
        </form>
      </div>
    );
  };
  const burgerBag = () => {
    if (props.burgersArray.length === 0) {
      return <p>Your bag is empty!</p>;
    } else {
      return (
        <>
          {elementBurgerMap}
          {completeOrder()}
        </>
      );
    }
  };
  return (
    <div className={styles.burgerCart}>
      <div className={styles.headButtons}>
        <div className={styles.goHome}>
          <Link to="/">Go home</Link>
        </div>
        <div className={styles.clearAll}>
          <Link onClick={props.clearCart} to="/">
            Clear all
          </Link>
        </div>
      </div>
      <div className={styles.content}>{burgerBag()}</div>
    </div>
  );

  /*   return <p>hello</p>;
  if (props.burgersArray.length === 0) {
    return <p>Your bag is empty!</p>;
  } else {
    return (
      <BurgerBagComplete
        burgersArray={props.burgersArray}
        clearCart={props.clearCart}
      />
    );
  } */
};
export default BurgerBag;
