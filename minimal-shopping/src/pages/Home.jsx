import { useState, useEffect } from "react";
import { getAllProducts } from "../api/productApi";
import Banner from '../components/Banner/Banner';
import ProductCard from '../components/ProductCard'
import { Link } from 'react-router-dom';

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllProducts().then(data => {
      setProducts(data.slice(0, 8));
      setLoading(false);
    })
  }, [])
  if (loading) return <div className="loading">Loading  products...</div>;

  return (
    <>
        <Banner />
      <div className="page home-page">
        <section className="products">
          <header className="products-header">
            <p>Products</p>
          </header>
          <div className="products-cards">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>

          <div className="see-more">
            <Link to="/products" className="see-more-btn">
              See More
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}
export default Home;
