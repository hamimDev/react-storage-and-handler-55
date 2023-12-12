import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {
    const [cosmitics, setcosmitics] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setcosmitics(data));
    },[])
    return (
        <div>
            <h1>Welcome to my Cosmetics store!!</h1>
            {
                cosmitics.map(cosmitic => <Cosmetic
                    key ={cosmitic.id} 
                    cosmitic ={cosmitic}
                >
                </Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;