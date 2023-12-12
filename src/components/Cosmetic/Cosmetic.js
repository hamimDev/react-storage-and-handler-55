import React from 'react';
import './Cosmetic.css'
import { addToDb, removeToDb } from '../../utilities/fakedb';

const Cosmetic = (props) => {
    const {name, picture, id, price} = props.cosmitic;

    const addToCard = (id)=>{
        addToDb(id);
    }

    const removeFromCart = id =>{
        removeToDb(id);
    }
    
    return (
        <div className='product'>
           <h2>Name: {name}</h2> 
           <h3>My Image</h3>
           <h1><img src={picture} alt="" /></h1>
           <h4>Price: {price}</h4>
           <p>It has id: {id}</p>
           <button onClick={()=>addToCard(id)}>Add to Card</button>
           <button onClick={()=>removeFromCart(id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;