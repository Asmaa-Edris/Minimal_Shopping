import { Link } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai' // Ant Design heart

export default function ProductCard({ product }) {
    return (
        <div className="product-card">
            <Link to={`/products/${product.id}`}>
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
            <div className="product-info">
                <h3>{product.title}</h3>
                <p className="price">${product.price}</p>
                <p className="description">{product.description.slice(0, 60)}</p>
            </div>
            </Link>
        </div>
    )
}