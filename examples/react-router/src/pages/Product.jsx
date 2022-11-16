import { useParams, useSearchParams } from 'react-router-dom';

const ProductPage = () => {
  const { id } = useParams();
  const [ params ] = useSearchParams();
  const queryParams = Object.fromEntries(params);

  return (
    <div>
      <h1>Product {id} Page</h1>
      <p>Some content</p>
    </div>
  );
}

export default ProductPage;
