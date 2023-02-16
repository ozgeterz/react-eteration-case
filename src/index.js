import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App"
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import  allreducers from  "./reducers"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Details from './pages/Details';

const store=createStore(allreducers)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <Provider store={store}>
    <App />
    <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/details/:id" element={<Details/>} />
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
  </Provider>

);
reportWebVitals();