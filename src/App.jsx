import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Home from "./Home";
import Sigchain from "./Sigchain";

// create browser router
const App = () => (
    <BrowserRouter basename="">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sigchain" element={<Sigchain />} />
        </Routes>
    </BrowserRouter>
);

export default App;