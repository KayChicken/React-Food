import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Pizzas from './components/Pizzas/Pizzas';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div className='body__container'>
        <Header />
        <Main>
          <Pizzas />
        </Main>
      </div>
    </Provider>

  );
}

export default App;
