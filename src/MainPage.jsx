import MainPageBurger from "./MainPageBurger";
import cheeseburgerImg from "./burgers/burgersImages/cheeseburger.png";
import hamburgerImg from "./burgers/burgersImages/hamburger.png";
import styles from "./MainPage.module.scss";
const MainPage = (props) => {
  const burgers = [
    {
      id: "1",
      name: "Cheeseburger",
      link: "cheeseburger",
      price: props.priceCheeseburger,
      image: cheeseburgerImg,
    },
    {
      id: "2",
      name: "Hamburger",
      link: "hamburger",
      price: props.priceHamburger,
      image: hamburgerImg,
    },
  ];
  const burgersIndex = burgers.map((el) => (
    <MainPageBurger
      key={el.id}
      name={el.name}
      link={el.link}
      price={el.price}
      image={el.image}
    />
  ));
  return (
    <div className={styles.block}>
      <div className={styles.title}>Menu</div>
      <div className={styles.grid}>{burgersIndex}</div>
    </div>
  );
};

export default MainPage;
