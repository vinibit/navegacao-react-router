import './Content.css';
import React from 'react';
import { Routes, Route, } from 'react-router-dom';

import Home from "../../views/examples/Home";
import Param from "../../views/examples/Param";
import About from "../../views/examples/About";
import NotFound from "../../views/examples/NotFound";
import Register from '../../views/examples/Register';

const Content = () => (
    <main className="Content">            
        <Routes>
            <Route exact path="/" element={<Home />} />                   
            <Route path="/about" element={<About />} />
            <Route path="/param/:id" element={<Param />} />                                
            <Route path="/register" element={<Register />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    </main>
)

export default Content;