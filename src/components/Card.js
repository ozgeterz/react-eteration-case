import React from "react";
import "./card.css";
import { useDispatch } from "react-redux";
import { deletefrombasket } from "../actions";
function Card({card}) {
  const dispatch = useDispatch();
  const deletefromcard= (value) => {
    dispatch(deletefrombasket(value));
  };
  return (
    <div className="carditem" id={card.id}>
      <p>{card.name}</p>
      <p>{card.price} $</p>
      <div className="cardbuttons">
        <button onClick={() => deletefromcard()}>-</button>
      </div>
    </div>
  );
}
export default Card;
