import React from "react";
import "./App.css";
import { useSelector } from "react-redux";
import { cardClick } from "./actions";
import { useDispatch } from "react-redux";
function App() {
  const card = useSelector((state) => state.addToCard);
  const dispatch = useDispatch();
  return (
    <div className="header">
      <div className="container">
        <div>
          <a href="/" className="brand">
            ETERATION
          </a>
        </div>
        <div className="search">
          <input type="text" placeholder="Search.."></input>
          <button>Search</button>
        </div>
        <button className="quantity" onClick={() => dispatch(cardClick())}>
          BASKET({card.length})
        </button>
      </div>
    </div>
  );
}
export default App;
