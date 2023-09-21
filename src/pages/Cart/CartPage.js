import { CartList } from "./components/CartList";
import { CartEmpty } from "./components/CartEmpty"; 
import { useCart } from "../../context";
import { useTitle } from "../../hooks/useTitle";

export const CartPage = () => {
  // const cartlistLength = 10;
  const { cartList } = useCart();
  
  useTitle(`Cart (${cartList.length})`);

  return (
    <main> 
      { cartList.length ? <CartList />: <CartEmpty /> }         
    </main>
  )
}
