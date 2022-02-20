import React, { useState } from "react";


const Hooksetate= props => {
    
    const [StateBuah, setBuahState] = useState({
        buah:[
            {name:'mangga', weight:'420gm'},
            {name:'laici', weight:'320gm'},
            {name:'kalamari of iron fotress', weight:'690gm'},
        ]
    });

   const clickHandler = () => {
        setBuahState({
            buah:[
                {name:'ku kira', weight:'420gm'},
                {name:'kau', weight:'320gm'},
                {name:'rumah', weight:'690gm'},
            ]
        });
    }
        return(
            <div>
                <p>------------------------</p>
                <h3>-ni contoh guna UseState Hook lika hook da ho </h3>
                <button onClick={clickHandler}>( . Y . )</button>
                <h3>-{StateBuah.buah[0].name}</h3>
                <h3>-{StateBuah.buah[1].name}</h3>
                <h3>-{StateBuah.buah[2].name}</h3>
                <p>------------------------</p>
            </div>
        ) 
    

}

export default Hooksetate