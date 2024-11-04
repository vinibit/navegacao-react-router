import React from 'react';
import { useParams } from 'react-router-dom';

const Param = () => {
    
    const { id } = useParams()
    return (
        <div>
            <h1>Parâmetro</h1>
            <h2>Valor: {id}</h2>
        </div>
    );
};

export default Param;