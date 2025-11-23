import { useContext } from "react";
import Modal from "./UI/Modal";
import Button from "./UI/button";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";
import { currencyFormatter } from "../util/formatting";
import CartItem from "./CartItem";

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const totalPrice = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handleHideCart() {
    userProgressCtx.hideCart();
  }

  function handleGotoCheckout() {
    userProgressCtx.showCheckout();
  }

  return (
    <Modal
      className="cart"
      open={userProgressCtx.progress === "cart"}
      onClose={userProgressCtx.progress === "cart" ? handleHideCart : null}
    >
      <h3>Your Cart</h3>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          quantity={item.quantity}
          price={item.price}
          onIncrease={() => cartCtx.addItem(item)}
          onDecrease={() => cartCtx.removeItem(item.id)}
        />
      ))}
      <p className="cart-total">{currencyFormatter.format(totalPrice)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleHideCart}>
          Close
        </Button>
        {cartCtx.items.length > 0 && (
          <Button onClick={handleGotoCheckout}>Go to Checkout</Button>
        )}
      </p>
    </Modal>
  );
}
