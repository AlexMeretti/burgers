import BurgerBagComplete from "./BurgerBagComplete";

const BurgerBag = (props) => {
  if (props.burgersArray.length === 0) {
    return <p>Your bag is empty!</p>;
  } else {
    return (
      <BurgerBagComplete
        burgersArray={props.burgersArray}
        clearBug={props.clearBug}
      />
    );
  }
};
export default BurgerBag;
