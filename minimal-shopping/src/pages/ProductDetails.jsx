import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import { getProductById } from '../api/productApi';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(id).then(data => setProduct(data));
  }, [id]);

  

  return (
  <>
  </>
  );
}
export default ProductDetails;