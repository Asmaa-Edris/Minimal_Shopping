import { useState, useEffect } from "react";
import { getAllProducts } from "../api/productApi";
import ProductCard from '../components/ProductCard'

function AllProducts() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        getAllProducts().then(data => {
            setProducts(data);
            setLoading(false);
        })

    }, [])
    if (loading) return <div className="loading">Loading All Products...</div>;
    return (
        <>
            <div className="page all-products-page">
                <section>
                    <header className="products-header">
                        <h1>All Products</h1>
                    </header>

                    <div className="products-grid">
                        {products.map((p) => (
                            <ProductCard key={p.id} product={p} />
                        ))}
                    </div>
                </section>
            </div>
        </>
    )
}
export default AllProducts;