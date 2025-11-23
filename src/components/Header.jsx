import { useContext } from "react";
import logoImg from "../assets/logo.jpg";
import Button from "./UI/button";
import CartContext from "../store/CartContext";

export default function Header() {
  const cartCtx = useContext(CartContext);

  const totalItemsCount = cartCtx.items.reduce((totalNumberOfItem, item) => {
    return totalNumberOfItem + item.quantity;
  }, 0);

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A restraurent" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <Button textOnly>Cart ({totalItemsCount})</Button>
      </nav>
    </header>
  );
}
