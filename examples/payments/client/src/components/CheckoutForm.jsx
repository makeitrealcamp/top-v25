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

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJDYW1pbG8iLCJsYXN0TmFtZSI6Ik1PUkVOTyIsImVtYWlsIjoiY3Jpc3RpYW4ubW9yZW5vQG1ha2VpdHJlYWwuY2FtcCIsImF2YXRhciI6IiIsInJvbGUiOiJVU0VSIiwiaWF0IjoxNjcxMDQxNDYzLCJleHAiOjE2NzEwNzc0NjN9.-33g6TwL8lvZSrAd7tv1T4NeDh9Or9YMWmky1lGUIDE'

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        paymentMethod,
        amount: Math.floor(state.total * 100), // state.total -> $100 -> 10_000 cents
      })
    }

    const response = await fetch('http://localhost:8080/api/payments/', options)
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
