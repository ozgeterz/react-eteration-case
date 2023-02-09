import React, { useState } from "react";
import "./details.css";
import { useParams } from "react-router-dom";
import { details } from "../server";
function Details() {
  const [item, setItem] = useState(0);
  let { id } = useParams();
  details(id).then((result) => {
    setItem(result);
  });
  return (
    <div className="details">
      <div className="detail">
        <img src={item.image} alt="" />
        <div className="detail-info">
          <h3>{item.name}</h3>
          <h1>{item.price}</h1>
          <button className="detail-btn">Add To Card</button>
          <h2>{item.description}</h2>
        </div>
      </div>
    </div>
  );
}
export default Details;
