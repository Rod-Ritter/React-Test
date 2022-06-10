import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Contenu from "./Contenu/Contenu";
import Produit from "./Produit/Produit";
import Contact from './Contact/Contact';
import Posts from './Posts/Posts';
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
        <Route path="posts" element={<Posts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  
  </React.StrictMode>
);
