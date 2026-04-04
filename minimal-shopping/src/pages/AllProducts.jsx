import { useState } from "react";
import { getAllProducts } from "../api/productApi";

function AllProducts(){
    const [products , setProducts]=useState([]);
    const [loading , setLoading]=useState(true);
  

    useEffect(()=>{
        getAllProducts().then(data=>{
            setProducts(data);
            setLoading(false);
        })

    },[])
   if (loading) return <div className="loading">Loading All Products...</div>;
return(
    <>

    </>
)
}
export default AllProducts;