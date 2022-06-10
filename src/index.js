import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App/App";
import Contenu from "./Contenu/Contenu";
import Produit from "./Produit/Produit";
import Contact from './Contact/Contact';
import Layout from './Layout/Layout';



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
        <Route index element={<Contenu />} />
        <Route path="contact" element={<Contact />} />
        <Route path="produit" element={<Produit />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <App />
  
  </React.StrictMode>
);
