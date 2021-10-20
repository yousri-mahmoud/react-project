import React from "react";
import { useState, useEffect } from "react";
import ProductCard from "../component/ProductCard";
import Loading from "../shared/Loading";
function ProductsList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const getProductsData = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setLoading(false);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProductsData();
  }, []);
  if (loading) {
    return <Loading />;
  }

  return (
    <section className="products mt-5">
      <div className="row row-cols-1 row-cols-md-3 g-4 wrapper">
        {products.map((product) => {
          return <ProductCard key={product.id} {...product} />;
        })}
      </div>
    </section>
  );
}

export default ProductsList;
