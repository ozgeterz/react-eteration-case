import React from "react";
import "./App.css";
import { useSelector } from "react-redux";
import { cardclick } from "./actions";
import { useDispatch } from "react-redux";

function App() {
  const card = useSelector((state) => state.addtocard);
  const dispatch = useDispatch();
  return (
  
      <div className="header">
        <div className="container">
          <div >
            <a  href="/" className="brand">ETERATION</a>
          </div>
          <div className="search">
            <input type="text" placeholder="Search.."></input>
            <button>Search</button>
          </div>
          <div className="cart" onClick={() => dispatch(cardclick()) }><h3 className="quantity">BASKET({card.length})</h3>
          </div>
        </div>
      </div>
  
  );
}

export default App;

