import React , {useState} from 'react';

interface IPizzaCardProps {
    title: string,
    dough: string[],
    size: string[],
    price: string,
    imageUrl : string

}



const PizzaCard: React.FC<IPizzaCardProps> = ({ title, dough, size, price, imageUrl }) => {



    const [currentDough, setCurrentDough] = useState<number>(0)
    const [currentSize, setCurrentSize] = useState<number>(0)
    const [currentCount , setCurrentCount] = useState<number>(0)



    return (
        <div className='pizza__card'>
            <div className="pizza__img">
                <img src={imageUrl} alt="pizza__logo" />
            </div>
            <h2>{title}</h2>
            <div className="pizza__settings">
                <div className="settings__row">
                    <ul>
                        {dough.map((dough, id) => (<li className={currentDough === id ? 'active' : ''} onClick={() => {setCurrentDough(id)}}>{dough}</li>))}
                    </ul>
                </div>
                <div className="settings__row">
                    <ul>
                        {size.map((size,id) => (<li className={currentSize === id ? 'active' : ''} onClick={() => {setCurrentSize(id)}}>{size} см.</li>))}
                    </ul>
                </div>
            </div>
            <div className="pizza__bottom">
                <div className="pizza__price">от {price} руб.</div>
                <div className="pizza__add">

                    <button className='pizza__add-btn' onClick={() => {setCurrentCount(currentCount + 1)}}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="white" />
                        </svg>
                        Добавить
                        {currentCount > 0 && (
                            <div className='add__count'>
                                <span>{currentCount}</span>
                            </div>
                        )}

                    </button>
                </div>

            </div>
        </div>
    );
};

export default PizzaCard;