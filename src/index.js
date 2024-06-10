import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home";
import About from "./pages/about";
import ArtistList from "./pages/artist-list";
import AlbumList from "./pages/album-list";
import Cart from "./pages/cart";
import Contact from "./pages/contact";
import Artist from "./pages/artist";
import Genre from "./pages/genre";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="artistlist" element={<ArtistList />} />
        <Route path="cart" element={<Cart />} />
        <Route path="contact" element={<Contact />} />
        <Route path="artist" element={<Artist />} />
        <Route path="genre" element={<Genre />} />
        <Route path="albumlist" element={<AlbumList />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
