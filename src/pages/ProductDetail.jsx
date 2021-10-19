import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Loading from "../shared/Loading";
function ProductDetail({ match }) {
  const [product, setProduct] = useState("");
  const [loading, setLoading] = useState(false);
  let { id } = useParams();
  const getProductData = async () => {
    setLoading(true);
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await res.json();
      setLoading(false);
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProductData();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <section>
      <div className="card h-100">
        <img src={product.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <h4 className="card-text text-danger">{product.category}</h4>
          <p>{product.price}</p>
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;
