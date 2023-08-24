import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import EmptyCart from '../components/EmptyCart/EmptyCart';
import FullCart from '../components/FullCart/FullCart';

const Cart = () => {


    const { cart } = useSelector((state: RootState) => state.cart)



    useEffect(() => {

    }, [cart])

    return (
        <section className='cart__section'>
            <div className="container">
                {cart.length !== 0 ? (

                    <FullCart cart={cart}/>

                ) : (<EmptyCart />)}

            </div>
        </section>
    );
};

export default Cart;