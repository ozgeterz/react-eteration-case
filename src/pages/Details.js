import React, { useState } from "react";
import "./details.css";
import { useParams } from "react-router-dom";
import { details } from "../server";

function Details() {
  const [product, setProduct] = useState(0);
  let { id } = useParams();
  details(id).then((result) => {
    setProduct(result);
  });
  return (
    <div className="details">
      <div className="detail">
        <img src={product.image} alt="" />
        <div className="detail-info">
          <h3>{product.name}</h3>
          <h1>{product.price}</h1>
          <button className="detail-btn">Add To Card</button>
          <h2>{product.description}</h2>
        </div>
      </div>
    </div>
  );
}
export default Details;
