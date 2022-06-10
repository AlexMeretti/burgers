import ElementBurger from "./ElementBurger";
import styles from "./BurgerBagComplete.module.scss";
const BurgerBagComplete = (props) => {
  const elementBurgerMap = props.burgersMassive.map((el) => (
    <ElementBurger
      name={el.name}
      cheese={el.cheese}
      cutlet={el.cutlet}
      crispyOnion={el.crispyOnion}
      burgerPrice={el.burgerPrice}
      img={el.img}
    />
  ));
  const sendBag = (event) => {
    event.preventDefault();
    const inputName = document.getElementById("inputName").value;
    alert(`Thx for your order, ${inputName}`);
    props.completeOrder();
  };

  const finalPrice = () => {
    const massive = props.burgersMassive.map((el) => {
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
          <input id="inputName" placeholder="Enter name"></input>
          <button onClick={sendBag}>Send</button>
        </form>
      </div>
    );
  };
  return (
    <>
      <div>{elementBurgerMap}</div>
      <div>{completeOrder()}</div>
    </>
  );
};

export default BurgerBagComplete;
