import React from "react";
import ReactDom from "react-dom/client"
import './index.css';
import App from "./App.js";
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from "react-redux";
// import { store } from "./store";

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <BrowserRouter>
            <App />
      </BrowserRouter>
   </React.StrictMode>
);

