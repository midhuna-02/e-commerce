import { useEffect, useState } from "react";


import Footer from "../../components/Shared/Footer/Footer";
import Header from "../../components/Shared/Header/Header";

import ProductCard from "../../components/Home/ProductCard/ProductCard";

	function Home() 
  {
  // whenever there is achange in products, it will force component refresh.

  const [products, setProducts] = useState([]);
  // const [click, setClick] = useState(0);
  // const [click2, setClick2] = useState(100);
  // let data = "My Data";

  useEffect(() => {
    fetch("Product.json")
      // calling json function.
      .then((res) => res.json())
      // listening for json function to return.
      .then((res) => {
        setProducts(res);
        console.log("fetching data");
        
       
       
      });
  }, []);

  return (
    <div>
      <Header />
      {/* Products */}
      <div className="row">
      {products.map((product,i)=>(
        <div className="col-3">
        <ProductCard item={product} index={i}/>
        </div>
      ))}
      </div>
      </div>
  );
        }

        export default Home; 