import { CartList } from "./components/CartList";
import { CartEmpty } from "./components/CartEmpty"; 
import { useCart } from "../../context";

export const CartPage = () => {
  // const cartlistLength = 10;
  const { cartList } = useCart();

  return (
    <main> 
      { cartList.length ? <CartList />: <CartEmpty /> }         
    </main>
  )
}
