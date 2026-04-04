import { useState } from "react";
import { getAllProducts } from "../api/productApi";

function Home() {
 const [products , setProducts]=useState([]);
  const [loading , setLoading]=useState(true);

  useEffect(()=>{
    getAllProducts().then(data=>{
        setProducts(data.slice(0,8));
        setLoading(false);
    })
  },[])
 if (loading) return <div className="loading">Loading  products...</div>;

 return(
    <>
    </>
 )
}
export default Home;
