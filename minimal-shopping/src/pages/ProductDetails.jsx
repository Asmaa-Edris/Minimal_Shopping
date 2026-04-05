import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../api/productApi';


function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [added, setAdded] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);
  const sizes = ['S', 'M', 'L', 'XL'];

  useEffect(() => {
    getProductById(id).then(data => setProduct(data));
  }, [id]);

  const handleAddToCart = () => {
    setAdded(true);
  };

  if (!product) {
    return <div className="loading">Loading product details...</div>;
  }

  return (
    <>
      <div className="page product-details-page">
        <div className="product-details-layout">
          <div className="product-image">
            <img src={product.thumbnail} alt={product.title} />
          </div>

          <div className="product-info">
            <h1>{product.title}</h1>
            <p className="price">${product.price}</p>
            <p className="brand">{product.brand}</p>
            <p className="category">{product.category}</p>
            <p className="description">{product.description}</p>

            {/* Size choices */}
            <div className="size-selector">
              <span>Size</span>
              <div className="size-buttons">
                {sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </ div>
            </ div>

            <button className="add-cart" onClick={handleAddToCart}>Add to cart</button>

            {added && (<p className="added-message">Added to Cart</p>)}
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductDetails;