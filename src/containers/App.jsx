import React from 'react';
import useInitialState from '../hooks/useInitialState';

import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initalState';

const App = () => {
  const state = useInitialState(API);

  return state.length === 0 ? <h1>Loading...</h1> : (
    <div className='App'>
      <Header />
      <Search />

      {state.mylist.length != 0 && (
        <Categories title='Mi Lista'>
          <Carousel>
            {state.mylist.map(item =>
              <CarouselItem key={item.id} {...item}/>
            )}
          </Carousel>
        </Categories>
      )}

      <Categories title='Tendencias'>
        <Carousel>
          {state.trends.map(item =>
            <CarouselItem key={item.id} {...item}/>
          )}
        </Carousel>
      </Categories>

      <Categories title='Originales de Platzi Video'>
        <Carousel>
          {state.originals.map(item =>
            <CarouselItem key={item.id} {...item}/>
          )}
        </Carousel>
      </Categories>

      <Footer />
    </div>
  );
}

export default App;
