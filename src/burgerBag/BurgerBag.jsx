import BurgerBagComplete from "./BurgerBagComplete";

const BurgerBag = (props) => {
  if (props.burgersMassive.length === 0) {
    return <p>Your bag is empty!</p>;
  } else {
    return (
      <BurgerBagComplete
        burgersMassive={props.burgersMassive}
        completeOrder={props.completeOrder}
      />
    );
  }
};
export default BurgerBag;
