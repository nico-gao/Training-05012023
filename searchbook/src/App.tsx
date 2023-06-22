import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, Navigate, NavLink, RouterProvider } from "react-router-dom";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Searchbook from "./pages/searchbook/Searchbook";
import Wishlist from "./pages/wishlist/Wishlist";



function App() {
    return (
        <div className="App">
            <Header />

            <Routes>
                <Route path="/" element={<Navigate to="/searchbook" replace={true} />} />
                <Route path="/searchbook" element={<Searchbook />} />
                <Route path="/wishlist" element={<Wishlist />} />
            </Routes>
        </div>
    );
}

export default App;
