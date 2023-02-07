import type { NextApiRequest, NextApiResponse } from 'next'

const products = [
  {
    id: "1",
    name: 'Product 1',
    price: 100,
  },
  {
    id: "2",
    name: 'Product 2',
    price: 200,
  },
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {

  if (req.method ==='GET') {
    return res.status(200).json(products)
  }

  if (req.method ==='POST') {
    const { name, price } = req.body
    const product = {
      id: Date.now().toString(),
      name,
      price,
    }
    products.push(product)
    return res.status(201).json(product)
  }




}
