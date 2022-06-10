let rerenderEntireTree = () => {
  console.log("State changed");
};
export const subscribe = (observer) => {
  rerenderEntireTree = observer;
};

let state = {
  burgersMassive: [],
  prices: {
    Cheeseburger: 1.28,
    Hamburger: 1.21,
    supplements: {
      Cutlet: 1.08,
      Cheese: 0.41,
      CrispyOnion: 0.69,
    },
  },
};
window.state = state;
export const burgerAdd = (props) => {
  const burgerToState = {
    name: props.name,
    cutlet: props.cutlet,
    cheese: props.cheese,
    crispyOnion: props.crispyOnion,
    img: props.img,
    burgerPrice: props.burgerPrice,
  };
  state.burgersMassive.push(burgerToState);
  rerenderEntireTree();
};
export const completeOrder = () => {
  state.burgersMassive = [];
  rerenderEntireTree();
};

export default state;
