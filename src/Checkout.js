import React from 'react';
import {useStateValue} from './StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
    const [{cart}] = useStateValue();
  return (
    <div className='checkout'>
        <img className='checkout__ad' src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' />

    {cart?.length === 0 ? (
        <div>
        <h2>Your Shopping basket is Empty</h2>
        <p>
            You have no items in your basket. To buy one or more items, click on "Add to Cart" next to the item.
        </p>
        </div>
    ) : (
        <div>
            <h2 className='checkout__title'> Your Shoppping Basket </h2>
            {cart.map(item => (
                <CheckoutProduct 
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
            ))}
        </div>
    )}


        {cart.length > 0 && (
            <div className='checkout__right'>
            <h1> Sub Total </h1>
                <Subtotal />
            </div>
             )}
    </div>
  );
}

export default Checkout;