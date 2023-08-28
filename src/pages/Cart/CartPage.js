import { CartList } from "./components/CartList";
import { CartEmpty } from "./components/CartEmpty"; 

export const CartPage = () => {
  const cartlistLength = 10;

  return (
    <main> 
      { cartlistLength ? <CartList />: <CartEmpty /> }         
    </main>
  )
}
