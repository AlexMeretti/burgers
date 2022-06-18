import { useState } from "react";
import cheeseburgerImg from "./burgersImages/cheeseburger.png";
import cutlet from "./supplements/cutlet.png";
import cheese from "./supplements/cheese.png";
import crispyOnion from "./supplements/crispyOnion.png";
import { Link } from "react-router-dom";
import styles from "./burgersPage.module.scss";
const CheeseburgerPage = (props) => {
  const [priceCheeseburgerTotal, setPriceCheeseburgerTotal] = useState(1.28);
  const [countCutlet, setCountCutlet] = useState(0);
  const [countCheese, setCountCheese] = useState(0);
  const [countCrispyOnion, setCountCrispyOnion] = useState(0);
  const priceCheeseburgerTotalFixed = priceCheeseburgerTotal.toFixed(2);

  const handleAddCutletIncrement = () => {
    if (countCutlet < 10) {
      setCountCutlet((prevValue) => prevValue + 1);
      setPriceCheeseburgerTotal((prevValue) => prevValue + props.priceCutlet);
    } else {
    }
  };
  const handleAddCutletDecrement = () => {
    setCountCutlet((prevValue) => (prevValue > 0 ? prevValue - 1 : 0));
    setPriceCheeseburgerTotal((prevValue) => prevValue - props.priceCutlet);
  };

  const handleAddCheeseIncrement = () => {
    if (countCheese < 10) {
      setCountCheese((prevValue) => prevValue + 1);
      setPriceCheeseburgerTotal((prevValue) => prevValue + props.priceCheese);
    } else {
    }
  };
  const handleAddCheeseDecrement = () => {
    setCountCheese((prevValue) => (prevValue > 0 ? prevValue - 1 : 0));
    setPriceCheeseburgerTotal((prevValue) => prevValue - 0.41);
  };
  const handleAddCrispyOnionIncrement = () => {
    if (countCrispyOnion < 10) {
      setCountCrispyOnion((prevValue) => prevValue + 1);
      setPriceCheeseburgerTotal(
        (prevValue) => prevValue + props.priceCrispyOnion
      );
    } else {
    }
  };
  const handleAddCrispyOnionDecrement = () => {
    setCountCrispyOnion((prevValue) => (prevValue > 0 ? prevValue - 1 : 0));
    setPriceCheeseburgerTotal(
      (prevValue) => prevValue - props.priceCrispyOnion
    );
  };

  const supplementAddCoutlet = () => {
    if (countCutlet === 0) {
      return (
        <div>
          <button
            className={styles.buttonBefore}
            onClick={handleAddCutletIncrement}
          >
            Add
          </button>
        </div>
      );
    } else {
      return (
        <div className={styles.afterButtons}>
          <button onClick={handleAddCutletDecrement}>-</button>
          {countCutlet}
          <button onClick={handleAddCutletIncrement}>+</button>
        </div>
      );
    }
  };
  const supplementAddCheese = () => {
    if (countCheese === 0) {
      return (
        <div>
          <button
            className={styles.buttonBefore}
            onClick={handleAddCheeseIncrement}
          >
            Add
          </button>
        </div>
      );
    } else {
      return (
        <div className={styles.afterButtons}>
          <button onClick={handleAddCheeseDecrement}>-</button>
          {countCheese}
          <button onClick={handleAddCheeseIncrement}>+</button>
        </div>
      );
    }
  };
  const supplementAddCrispyOnion = () => {
    if (countCrispyOnion === 0) {
      return (
        <div>
          <button
            className={styles.buttonBefore}
            onClick={handleAddCrispyOnionIncrement}
          >
            Add
          </button>
        </div>
      );
    } else {
      return (
        <div className={styles.afterButtons}>
          <button onClick={handleAddCrispyOnionDecrement}>-</button>
          {countCrispyOnion}
          <button onClick={handleAddCrispyOnionIncrement}>+</button>
        </div>
      );
    }
  };

  const handleClickAdd = () => {
    const countCheeseburger = {
      name: "Cheeseburger",
      id: Math.random().toString(36).substring(2, 9),
      cutlet: countCutlet,
      cheese: countCheese,
      crispyOnion: countCrispyOnion,
      img: cheeseburgerImg,
      burgerPrice: priceCheeseburgerTotalFixed,
    };
    props.burgerAdd(countCheeseburger);
  };
  return (
    <div className={styles.block}>
      <div className={styles.headButtons}>
        <Link to="/" className={styles.goHome}>
          Go home
        </Link>
        <Link to="/hamburger" className={styles.nextBurger}>
          Next burger
        </Link>
      </div>
      <div className={styles.burgerGrid}>
        <div className={styles.image}>
          <img src={cheeseburgerImg} alt="cheeseburger img" />
        </div>
        <div className={styles.title}>
          <p>Cheeseburger</p>
        </div>
        <div className={styles.price}>
          <p>
            <span>{props.priceCheeseburger} $</span>
          </p>
        </div>
      </div>
      <p className={styles.likeToAdd}>Would like to add ?</p>
      <div className={styles.supplements}>
        <div className={styles.supplementBlock}>
          <div className={styles.supplementImage}>
            <img src={cutlet} alt="cutlet" />
          </div>
          <p className={styles.title}>Cutlet</p>
          <p className={styles.price}>{props.priceCutlet} $</p>
          {supplementAddCoutlet()}
        </div>
        <div className={styles.supplementBlock}>
          <div className={styles.supplementImage}>
            <img src={cheese} alt="cheese" />
          </div>
          <p className={styles.title}>Cheese</p>
          <p className={styles.price}>{props.priceCheese} $</p>
          {supplementAddCheese()}
        </div>
        <div className={styles.supplementBlock}>
          <div className={styles.supplementImage}>
            <img src={crispyOnion} alt="onion" />
          </div>
          <p className={styles.title}>Сrispy onion</p>
          <p className={styles.price}>{props.priceCrispyOnion} $</p>
          {supplementAddCrispyOnion()}
        </div>
      </div>

      <div className={styles.addToCardBlock}>
        <p>
          Total price for burger <span>{priceCheeseburgerTotalFixed} $</span>
        </p>
        <button className={styles.addToCardButton} onClick={handleClickAdd}>
          Add to card
        </button>
      </div>
    </div>
  );
};

export default CheeseburgerPage;
