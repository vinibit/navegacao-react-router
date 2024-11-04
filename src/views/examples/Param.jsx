import React from 'react';

const Param = () => {
    const { id } = []//useParams();

    return (
        <div>
            <h1>Param Component</h1>
            <p>Parameter: {id}</p>
        </div>
    );
};

export default Param;