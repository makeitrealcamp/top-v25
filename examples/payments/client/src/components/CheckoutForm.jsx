import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

import { useAppContext } from "../store"

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { state } = useAppContext();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement)
    })

    if (error) {
      console.log(error);
      return
    }

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        paymentMethod,
        amount: Math.floor(state.total * 100), // state.total -> $100 -> 10_000 cents
      })
    }

    const response = await fetch('http://localhost:8080/api/checkout', options)
    const data = await response.json()
    console.log("🚀 ~ file: CheckoutForm.jsx:36 ~ handleSubmit ~ data", data)

    elements.getElement(CardElement).clear();

  }

  return(
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit">Pay</button>
    </form>
  )
}

export default CheckoutForm
