// localhost:3000/products
import Head from 'next/head'
import Link from 'next/link'

const products = [
  {
    id: 6,
    name: 'Product 1',
    price: 100,
    description: 'Product 1 description'
  },
  {
    id: 9,
    name: 'Product 2',
    price: 200,
    description: 'Product 2 description'
  },
]

const ProductsPage = () => {
  return(
    <>
      <Head>
        <title>Products Page | MIR.com</title>
        <meta name="description" content="Products Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icoån" href="/favicon.ico" />
      </Head>
      <h1>Products Page</h1>

      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>
              <h2>{product.name}</h2>
              <p>{product.price}</p>
              <p>{product.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default ProductsPage
