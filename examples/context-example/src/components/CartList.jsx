

import ItemCart from "./ItemCart"

const CartList = () => {
  const cart = []

  return(
    <ul className="shopping-cart-items">
      {
        cart.map((item, index) => (
          <ItemCart key={index} item={item} />
        ))
      }
    </ul>
  )
}

export default CartList
