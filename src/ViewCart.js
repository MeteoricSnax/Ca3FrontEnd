import React from 'react';
import cart from './shoppingCart';

const CartComponent = () => {
    return <div className="container">
        <h2>Shopping Cart</h2>
        <p>Weight: {cart.getWeight()}g, Price: {cart.getPrice()}kr.</p>
        {cart.getCart().map((item) => 
            <li key={item.id}>{item.weight}g {item.name}</li>
        )}
        <div className="col-sm-2 float-right">
            <button className="btn btn-primary">Checkout</button>
        </div>
    </div>
    
}
export default CartComponent;