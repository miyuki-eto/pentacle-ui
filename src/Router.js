import React from "react";
import { Route, Routes } from "react-router";

import {About} from "./pages/about";
import {Main} from "./pages/main";

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>
    );
}
