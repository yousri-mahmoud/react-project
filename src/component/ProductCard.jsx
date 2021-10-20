import React from "react";
import { Link } from "react-router-dom";
import "./card.css";
function ProductCard({ id, image, title, category, price }) {
  return (
    <div className="col">
      <div className="card h-100 p-4">
        <Link to={`/product/${id}`}>
          <img src={image} className="card-img-top item " alt="..." />
        </Link>
        <div className="card-body py-2">
          <h5 className="card-title">{title}</h5>
          <h4 className="card-text text-danger ">{category}</h4>
          <p> price : {price} EGP</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
