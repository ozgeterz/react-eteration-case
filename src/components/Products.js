import React from "react";
import "./products.css";
import { addtocard } from "../actions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function Products({ items }) {
  //props
  const dispatch = useDispatch();
  function Additemincard(item) {
    dispatch(addtocard(item));
  };
  return (
    <div className="products">
      {items.map((item) => { 
        const id = item.id;
        const link = "/details/" + id;
        return (
          <div className="product" key={item.id}>
            <Link to={link} className="link">
              <img src={item.image} alt="" />
              <h3>{item.name}</h3>
              <p>{item.price} $</p>
            </Link>
            <button onClick={() => Additemincard(item)}>Add to Card</button>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
