const addToDb = id =>{
    let shoppingCard; 
    const storedCart = localStorage.getItem('shopping-card');
    if(storedCart){
        shoppingCard = JSON.parse(storedCart);
    }
    else{
        shoppingCard = {};
    }

    const quantity = shoppingCard[id];
    if(quantity){
        const newQuantity = quantity + 1;
        shoppingCard[id] = newQuantity;
    }
    else{
        shoppingCard[id] = 1;
    }
    localStorage.setItem('shopping-card', JSON.stringify(shoppingCard));
}

const removeToDb = id =>{
    const storedCart = localStorage.getItem('shopping-card');
    if(storedCart){
        const soppingCart = JSON.parse(storedCart);
        if( id in soppingCart){
            delete soppingCart[id];
            localStorage.setItem('shopping-card', JSON.stringify(soppingCart));
        }
    }
}



export {addToDb, removeToDb};