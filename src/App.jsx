import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Home from "./Home";
// import VCPage from "./sigchain"; TODO: once james uploads his page, uncomment this line

// create browser router
const App = () => (
    <BrowserRouter basename="">
        <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/sigchain" element={<Sigchain />} /> */}
        </Routes>
    </BrowserRouter>
);

export default App;