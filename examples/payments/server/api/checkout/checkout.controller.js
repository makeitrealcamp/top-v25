const Stripe = require('stripe');

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

async function handlerCheckout(req, res) {
  const { paymentMethod, amount } = req.body;

  try {
    const { id, card } = paymentMethod
    const payment = await stripe.paymentIntents.create({
      payment_method: id,
      amount,
      currency: 'usd',
      confirm: true,
      description: 'Pago de prueba top-v25',
    })

    return res.json({ message: 'success', payment });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

}

module.exports = {
  handlerCheckout,
}
