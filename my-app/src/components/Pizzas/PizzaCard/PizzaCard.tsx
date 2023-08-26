import React , {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { addCart } from '../../../store/slices/cartSlice';

export interface IPizzaCardProps {
    id : string,
    name: string,
    sizes: string[],
    price: string,
    imageUrl : string,
    types : string[],
    count? : number | undefined 

}



const PizzaCard: React.FC<IPizzaCardProps> = ({ id, name, sizes, price, imageUrl, types, count }) => {


   


    const [currentDough, setCurrentDough] = useState<number>(0)
    const [currentSize, setCurrentSize] = useState<number>(0)
    



  

    const dispatch = useDispatch()



    const cartAdding = () => {
        const pizza = {id,name,sizes : sizes[currentSize],price,imageUrl,types : types[currentDough]}
        dispatch(addCart(pizza))
       
        
    }


    return (
        <div className='pizza__card'>
            <div className="pizza__img">
                <img src={imageUrl} alt="pizza__logo" />
            </div>
            <h2>{name}</h2>
            <div className="pizza__settings">
                <div className="settings__row">
                    <ul>
                        {types.map((type, id) => (<li key={type} className={currentDough === id ? 'active' : ''} onClick={() => {setCurrentDough(id)}}>{type}</li>))}
                    </ul>
                </div>
                <div className="settings__row">
                    <ul>
                        {sizes.map((size,id) => (<li key={size} className={currentSize === id ? 'active' : ''} onClick={() => {setCurrentSize(id)}}>{size} см.</li>))}
                    </ul>
                </div>
            </div>
            <div className="pizza__bottom">
                <div className="pizza__price">от {price} руб.</div>
                <div className="pizza__add">

                    <button className='pizza__add-btn' onClick={() => {cartAdding()}}>
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