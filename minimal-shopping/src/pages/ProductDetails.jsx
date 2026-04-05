import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../api/productApi';


function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [added, setAdded] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);
  const sizes = ['XS', 'S', 'M', 'L'];

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
            <div className="product-new-badge">New!</div>
            <h1>{product.title}</h1>
            <p className="price">${product.price}</p>
            <p className="brand">Brand: {product.brand}</p>
            
            <div className="description">
              <p>Relaxed fit</p>
              <p>Crew neck</p>
              <p>Drop shoulder sleeves</p>
              <p>Elasticated neckline, hemline and cuffs</p>
              <p>Made in Russia</p>
            </div>

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

            <button className="add-cart" onClick={handleAddToCart}>Add to Cart</button>

            {added && (<p className="added-message">Added to Cart</p>)}
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductDetails;