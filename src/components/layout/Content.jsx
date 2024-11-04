import './Content.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from "../../views/examples/Home";
import Param from "../../views/examples/Param";
import About from "../../views/examples/About";
import NotFound from "../../views/examples/NotFound";

const Content = (props) => {
    return (
        <main className="Content">
            Conteúdo
            {props.children}
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/param/:id" element={<Param />} />
                <Route path="/" exact element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </main>
    );
};

export default Content;