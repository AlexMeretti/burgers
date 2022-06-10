import CheeseburgerPage from "./burgers/CheeseburgerPage";
import HamburgerPage from "./burgers/HamburgerPage";
import MainPage from "./MainPage";
import { Routes, Route } from "react-router-dom";
import BurgerBag from "./burgerBag/BurgerBag";
import styles from "./App.module.scss";
function App(props) {
  return (
    <div className={styles.grid}>
      <div className={styles.wrapper}>
        <Routes>
          <Route
            path="/"
            element={<MainPage prices={props.state.prices} />}
          ></Route>
          <Route
            path="cheeseburger"
            element={
              <CheeseburgerPage
                state={props.state}
                burgerAdd={props.burgerAdd}
                prices={props.state.prices}
              />
            }
          ></Route>
          <Route
            path="hamburger"
            element={
              <HamburgerPage
                state={props.state}
                burgerAdd={props.burgerAdd}
                prices={props.state.prices}
              />
            }
          ></Route>
        </Routes>
      </div>
      <div className={styles.bag}>
        <p className={styles.title}>Your Bag</p>
        <BurgerBag
          burgersMassive={props.state.burgersMassive}
          completeOrder={props.completeOrder}
        />
      </div>
    </div>
  );
}

export default App;
