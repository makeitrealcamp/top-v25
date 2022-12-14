import CartList from './components/CartList'
import { useAppContext } from "./store"

const Payment = () => {
  const { state } = useAppContext();
  return(
    <div>

      <div className="container">
        <div>
          <h1>Product List</h1>
          <CartList />
        </div>

        <div>
          <h2>Total</h2>
          <h3>Price: ${state.total}</h3>
        </div>
      </div>
    </div>
  )
}

export default Payment
