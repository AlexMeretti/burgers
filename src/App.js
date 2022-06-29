import CheeseburgerPage from "./burgers/CheeseburgerPage";
import HamburgerPage from "./burgers/HamburgerPage";
import MainPage from "./MainPage";
import { Routes, Route, Link } from "react-router-dom";
import BurgerBag from "./burgerBag/BurgerBag";
import styles from "./App.module.scss";
import { useState, useEffect } from "react";
import cart from "./cart.png";
const App = (props) => {
  const [burgersArray, setBurgersArray] = useState(
    JSON.parse(localStorage.getItem("burgers")) || []
  );
  useEffect(() => {
    localStorage.setItem("burgers", JSON.stringify(burgersArray));
  }, [burgersArray]);
  const removeBurger = (id) => {
    setBurgersArray([...burgersArray.filter((burger) => burger.id !== id)]);
  };
  const burgerAdd = (object) => {
    setBurgersArray([...burgersArray, object]);
  };
  const clearCart = () => {
    setBurgersArray([]);
  };
  const priceCheeseburger = 1.28;
  const priceHamburger = 1.21;
  const priceCutlet = 1.08;
  const priceCheese = 0.41;
  const priceCrispyOnion = 0.69;
  const cartCount = () => {
    if (burgersArray.length > 0) {
      return burgersArray.length;
    } else {
      return null;
    }
  };

  return (
    <div className={styles.grid}>
      <div className={styles.wrapper}>
        <Routes>
          <Route
            path="/"
            element={
              <MainPage
                priceCheeseburger={priceCheeseburger}
                priceHamburger={priceHamburger}
              />
            }
          ></Route>
          <Route
            path="cheeseburger"
            element={
              <CheeseburgerPage
                priceCheeseburger={priceCheeseburger}
                priceCheese={priceCheese}
                priceCutlet={priceCutlet}
                priceCrispyOnion={priceCrispyOnion}
                burgerAdd={burgerAdd}
              />
            }
          ></Route>
          <Route
            path="hamburger"
            element={
              <HamburgerPage
                priceHamburger={priceHamburger}
                priceCheese={priceCheese}
                priceCutlet={priceCutlet}
                priceCrispyOnion={priceCrispyOnion}
                burgerAdd={burgerAdd}
              />
            }
          ></Route>
          <Route
            path="cart"
            element={
              <BurgerBag
                burgersArray={burgersArray}
                clearCart={clearCart}
                removeBurger={removeBurger}
              />
            }
          ></Route>
        </Routes>

        <div
          className={
            burgersArray.length > 0
              ? `${styles.cart}`
              : `${styles.cart} ${styles.noActiveCart}`
          }
        >
          <Link
            to="cart"
            onClick={
              burgersArray.length === 0 ? (e) => e.preventDefault() : null
            }
          >
            <p>{cartCount()}</p>
            <img src={cart} alt="cart" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default App;
