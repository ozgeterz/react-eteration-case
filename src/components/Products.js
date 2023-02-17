import React from "react";
import "./products.css";
import { addToCard } from "../actions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function Products({products}) {
  const dispatch = useDispatch();
  function addItemInCard(product) {
    dispatch(addToCard(product));
  }
  return (
    <div className="products">
      {products.map((product) => {
        const id = product.id;
        const link = "/details/" + id;
        return (
          <div className="product" key={product.id}>
            <Link to={link} className="link">
              <img src={product.image} alt="" />
              <h3>{product.name}</h3>
              <p>{product.price} $</p>
            </Link>
            <button onClick={() => addItemInCard(product)}>Add to Card</button>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
