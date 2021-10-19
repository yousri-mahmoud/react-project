import React from "react";
import { Link } from "react-router-dom";
function ProductCard({ id, image, title, category, price }) {
  return (
    <div classNameName="col">
      <Link to={`/product/${id}`}>
        <div className="card h-100">
          <img src={image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h4 className="card-text text-danger">{category}</h4>
            <p>{price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
