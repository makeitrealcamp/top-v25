

async function handlerCheckout(req, res) {

  try {


    return res.json({ message: 'success' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

}

module.exports = {
  handlerCheckout,
}
