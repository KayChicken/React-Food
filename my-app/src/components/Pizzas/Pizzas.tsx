import React, { useEffect, useRef, useState } from 'react';
import PizzaCard from './PizzaCard/PizzaCard';
import axios from 'axios';
import Skeleton from '../Skeleton/Skeleton';
import { useSelector, useDispatch } from 'react-redux'
import { changeCategory, changeSort } from '../../store/slices/filterSlice';
import { RootState } from '../../store/store';





interface IPizzas {
    name: string,
    imageUrl: string,
    price: string,
    sizes: string[],
    types: string[]

}





const Pizzas = () => {



    const categories = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
    const sortGroup = [
        {
            title : 'популярности',
            sorting : 'rate'
        },
        {
            title : 'по цене',
            sorting : 'price'
        },
        {
            title : 'по алфавиту',
            sorting : 'name'
        },
        
    ]

    const { categoryId, sortId } = useSelector((state: RootState) => state.filter)
    const dispatch = useDispatch()


    const [activeModal, setActiveModal] = useState<boolean>(false)
    const [pizzaLoading, setPizzaLoading] = useState<boolean>(true)
    const [pizzas, setPizzas] = useState<IPizzas[]>([])



    const popup = useRef<HTMLDivElement>(null)

    const handleSetModal = () => {

        setActiveModal(!activeModal)
    }


    const handleChangeSort = (id: number) => {
        dispatch(changeSort(id))
        setActiveModal(false)
    }




    useEffect(() => {
        const fetchData = async () => {
            try {
                setPizzaLoading(true)
                
                const category = categoryId ? `category=${categoryId}`: ''
                const sortBy = `sortBy=${sortGroup[sortId].sorting}`
                const response = await axios.get(`https://630b6a73ed18e8251652fc87.mockapi.io/pizzas?${category}&${sortBy}`);
                setPizzas(response.data);
                setPizzaLoading(false)
            } catch (error) {

            }
        };

        fetchData();

    }, [categoryId,sortId]);




    useEffect(() => {



        const handleClick = (e: MouseEvent) => {

            if (e.target instanceof Node && !popup.current?.contains(e.target)) {

                setActiveModal(false)
            }
        }


        document.addEventListener('click', handleClick)

        return () => { document.removeEventListener('click', handleClick) }
    }, [])



    return (
        <section className='pizzas__section'>
            <div className="container">
                <div className="pizza__content">
                    <div className="pizza__choose">
                        <div className="pizza__category">
                            <ul>
                                <li className={categoryId === null ? 'active' : ''} onClick={() => { dispatch(changeCategory(null)) }}>Все</li>
                                {categories.map((category, id) => (<li className={categoryId === id ? 'active' : ''} onClick={() => { dispatch(changeCategory(id)) }}>{category}</li>)
                                )}
                            </ul>
                        </div>

                        <div className="pizza__sort" ref={popup}>
                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z" fill="#2C2C2C" />
                            </svg>
                            <p>Сортировка по: <span onClick={() => { handleSetModal() }}>{sortGroup[sortId].title}</span></p>
                            {activeModal && (
                                <div className='sort__popup' >
                                    <ul>
                                        {sortGroup.map((sort, id) => (<li key={sort.title} onClick={() => { handleChangeSort(id) }}>{sort.title}</li>))}
                                    </ul>
                                </div>
                            )}
                        </div>

                    </div>

                    <div className="pizza__block">
                        <h1>Все пиццы</h1>
                        <div className="pizza__cards">
                            {pizzaLoading ? [...new Array(5)].map(() => (<Skeleton></Skeleton>)) : (
                                pizzas.map((item) => (
                                    <PizzaCard title={item.name} dough={item.types} size={item.sizes} price={item.price} imageUrl={item.imageUrl} />
                                ))
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Pizzas;