import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { addCart } from '../../../store/slices/cartSlice';

export interface IPizzaCardProps {
    id: string,
    title: string,
    category: string,
    data: {
        name: string,
        basePrice: string,
        imageUrl: string,
        sizes: { size: string, addPrice: string }[]


    }[],
    count?: number | undefined


}



const PizzaCard: React.FC<IPizzaCardProps> = ({ id, title, category, data }) => {



    const { cart } = useSelector((state: RootState) => state.cart)



    const [currentDough, setCurrentDough] = useState<number>(0)
    const [currentSize, setCurrentSize] = useState<number>(0)

    const count = cart.find((item) => item.id === id && item.type === data[currentDough].name && item.size === data[currentDough].sizes[currentSize].size)?.count
    let currentPrice: number = parseInt(data[currentDough].basePrice + data[currentDough].sizes[currentSize].addPrice)



    const dispatch = useDispatch()



    const cartAdding = () => {
        const pizza = { id, title, size: data[currentDough].sizes[currentSize].size, type: data[currentDough].name, imageUrl: data[currentDough].imageUrl, price: currentPrice }
        dispatch(addCart(pizza))


    }


    return (
        <div className='pizza__card'>
            <div className="pizza__img">
                <img src={data[currentDough].imageUrl} alt="pizza__logo" />
            </div>
            <h2>{title}</h2>
            <div className="pizza__settings">
                <div className="settings__row">
                    <ul>
                        {data.map((type, id) => (<li key={Math.random().toString(36).substring(7)} className={currentDough === id ? 'active' : ''} onClick={() => { setCurrentDough(id) }}>{type.name}</li>))}
                    </ul>
                </div>
                <div className="settings__row">
                    <ul>
                        {data[currentDough].sizes.map((sizes, id) => (<li key={sizes.addPrice} className={currentSize === id ? 'active' : ''} onClick={() => { setCurrentSize(id) }}>{sizes.size} см.</li>))}
                    </ul>
                </div>
            </div>
            <div className="pizza__bottom">
                <div className="pizza__price">от {currentPrice} руб.</div>
                <div className="pizza__add">

                    <button className='pizza__add-btn' onClick={() => { cartAdding() }}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="white" />
                        </svg>
                        Добавить
                        {count && (
                            <div className='add__count'>
                                <span>{count}</span>
                            </div>
                        )}

                    </button>
                </div>

            </div>
        </div>
    );
};

export default PizzaCard;