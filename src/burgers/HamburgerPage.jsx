import { useState } from "react";
import HamburgerImg from "./burgersImages/hamburger.png";
import cutlet from "./supplements/cutlet.png";
import cheese from "./supplements/cheese.png";
import crispyOnion from "./supplements/crispyOnion.png";
import { Link } from "react-router-dom";
import styles from "./burgersPage.module.scss";
const HamburgerPage = (props) => {
  const [priceHamburgerTotal, setPriceHamburgerTotal] = useState(1.21);
  const [countCutlet, setCountCutlet] = useState(0);
  const [countCheese, setCountCheese] = useState(0);
  const [countCrispyOnion, setCountCrispyOnion] = useState(0);
  const priceHamburgerTotalFixed = priceHamburgerTotal.toFixed(2);
  const supplementCutletPrice = () => {
    if (countCutlet === 0) {
      return props.priceCutlet;
    } else {
      return countCutlet * props.priceCutlet;
    }
  };
  const supplementCheesePrice = () => {
    if (countCheese === 0) {
      return props.priceCheese;
    } else {
      return countCheese * props.priceCheese;
    }
  };
  const supplementCrispyOnionPrice = () => {
    if (countCrispyOnion === 0) {
      return props.priceCrispyOnion;
    } else {
      return countCrispyOnion * props.priceCrispyOnion;
    }
  };
  const handleAddCutletIncrement = () => {
    if (countCutlet < 10) {
      setCountCutlet((prevValue) => prevValue + 1);
      setPriceHamburgerTotal((prevValue) => prevValue + props.priceCutlet);
    } else {
    }
  };
  const handleAddCutletDecrement = () => {
    setCountCutlet((prevValue) => (prevValue > 0 ? prevValue - 1 : 0));
    setPriceHamburgerTotal((prevValue) => prevValue - props.priceCutlet);
  };

  const handleAddCheeseIncrement = () => {
    if (countCheese < 10) {
      setCountCheese((prevValue) => prevValue + 1);
      setPriceHamburgerTotal((prevValue) => prevValue + props.priceCheese);
    } else {
    }
  };
  const handleAddCheeseDecrement = () => {
    setCountCheese((prevValue) => (prevValue > 0 ? prevValue - 1 : 0));
    setPriceHamburgerTotal((prevValue) => prevValue - 0.41);
  };
  const handleAddCrispyOnionIncrement = () => {
    if (countCrispyOnion < 10) {
      setCountCrispyOnion((prevValue) => prevValue + 1);
      setPriceHamburgerTotal((prevValue) => prevValue + props.priceCrispyOnion);
    } else {
    }
  };
  const handleAddCrispyOnionDecrement = () => {
    setCountCrispyOnion((prevValue) => (prevValue > 0 ? prevValue - 1 : 0));
    setPriceHamburgerTotal((prevValue) => prevValue - props.priceCrispyOnion);
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
    const countHamburger = {
      id: Math.random().toString(36).substring(2, 9),
      name: "Hamburger",
      cutlet: countCutlet,
      cheese: countCheese,
      crispyOnion: countCrispyOnion,
      img: HamburgerImg,
      burgerPrice: priceHamburgerTotalFixed,
    };
    props.burgerAdd(countHamburger);
  };
  return (
    <div className={styles.block}>
      <div className={styles.headButtons}>
        <Link to="/" className={styles.goHome}>
          Go home
        </Link>
        <Link to="/cheeseburger" className={styles.nextBurger}>
          Next burger
        </Link>
      </div>
      <div className={styles.burgerGrid}>
        <div className={styles.image}>
          <img src={HamburgerImg} alt="hamburger img" />
        </div>
        <div className={styles.title}>
          <p>Hamburger</p>
        </div>
        <div className={styles.price}>
          <p>
            <span>{props.priceHamburger} $</span>
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
          <p className={styles.price}>{supplementCutletPrice().toFixed(2)} $</p>
          {supplementAddCoutlet()}
        </div>
        <div className={styles.supplementBlock}>
          <div className={styles.supplementImage}>
            <img src={cheese} alt="cheese" />
          </div>
          <p className={styles.title}>Cheese</p>
          <p className={styles.price}>{supplementCheesePrice().toFixed(2)} $</p>
          {supplementAddCheese()}
        </div>
        <div className={styles.supplementBlock}>
          <div className={styles.supplementImage}>
            <img src={crispyOnion} alt="onion" />
          </div>
          <p className={styles.title}>Сrispy onion</p>
          <p className={styles.price}>
            {supplementCrispyOnionPrice().toFixed(2)} $
          </p>
          {supplementAddCrispyOnion()}
        </div>
      </div>

      <div className={styles.addToCardBlock}>
        <p>
          Total price for burger <span>{priceHamburgerTotalFixed} $</span>
        </p>
        <button className={styles.addToCardButton} onClick={handleClickAdd}>
          Add to card
        </button>
      </div>
    </div>
  );
};

export default HamburgerPage;
