import { Link } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';

export default function ProductCard({ product }) {
    return (
        <div className="product-card">
            <div className="product-image-wrapper">
                <img src={product.thumbnail} alt={product.title} />
                <button 
                    type='button' 
                    className='wishlist-btn' 
                    onClick={e => e.preventDefault()}
                >
                    <AiOutlineHeart size={18} />
                </button>
            </div>
            
            <Link to={`/products/${product.id}`} className="product-link">
                <div className="product-info">
                    <div className="product-main-row">
                        <h3>{product.title}</h3>
                        <span className="price">{product.price}$</span>
                    </div>
                    <p className="description">
                        {product.description.slice(0, 100)}
                    </p>
                </div>
            </Link>
        </div>
    );
}