import { useParams } from 'react-router-dom';

type Props = {};

function Product({}: Props) {
  const { id } = useParams();
  return <div>Product ID #{id}</div>;
}

export default Product;
