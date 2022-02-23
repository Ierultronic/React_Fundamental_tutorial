import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';


export const Functional = () =>{

    const [count, incCount] = useState(0)

    return(
        <div>
            <h1>Jumlah korang klik button bawah ni = {count}</h1>
            <button onClick={() => incCount(count + 1)}>Ciclk me hehehehehe</button>
        </div>
    )
}

export default Functional;
