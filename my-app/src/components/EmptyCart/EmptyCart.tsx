import React from 'react';

const EmptyCart = () => {
    return (
        <div className="cart__content">
            <h1>Корзина пустая 😕</h1>
            <p>Вероятней всего, вы не заказывали ещё пиццу.</p>
            <p> Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
            <div className="cart__empty__img">
                <img src="./static/img/shopping-cart.jpg" alt="cart__empty" />
            </div>
            <button>
                <a href="#">Вернуться назад</a>
            </button>

        </div>
    );
};

export default EmptyCart;