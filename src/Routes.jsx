import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home";

const RoutePage = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="*" element={<Home />} />
        </Routes>
    );
};

export default RoutePage;
