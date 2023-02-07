import Head from 'next/head'
import Image from 'next/image'

// localhost:3000/products/1
// /products/:id

const ProductDetailPage = (props) => {
  console.log("🚀 ~ file: [id].tsx:8 ~ ProductDetailPage ~ props", props)
  return(
    <>
      <Head>
        <title>Product Detail | MIR.com</title>
        <meta name="description" content="Product Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icoån" href="/favicon.ico" />
      </Head>
      <h1>{props.name}</h1>
      <p>{props.status}</p>
      <p>{props.species}</p>
      <Image
        src={props.image}
        alt={props.name}
        width={200}
        height={200}
      />
    </>
  )
}

export async function getStaticProps(context) {
  const { params } = context
  const { id } = params

  const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
  const result = await response.json()

  return {
    props: {
      ...result
    }
  }
}

export default ProductDetailPage
