import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Pizzas from './components/Pizzas/Pizzas';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Cart from './pages/Cart';
import { Route, Routes, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className='body__container'>
          <Header />
          <Main>
            <Routes>
              <Route path='/' element={<Pizzas />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
          </Main>
        </div>
      </Provider>
    </BrowserRouter>

  );
}

export default App;
