import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
          <img className='home__image' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt='' />
    
      <div className='home__row'>
      <Product
              id="1234321"
              title="The Lean Startup"
              price={11.22}
              rating={2}
              image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
              />

      <Product
              id="1234321"
              title="The Lean Startup"
              price={11.22}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
              />
      </div>
      <div className='home__row'>
      <Product
              id="1234321"
              title="The Lean Startup"
              price={11.22}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
              />

      <Product
              id="1234321"
              title="The Lean Startup"
              price={11.22}
              rating={3}
              image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
              />

      <Product
              id="1234321"
              title="The Lean Startup"
              price={11.22}
              rating={1}
              image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
              />
      </div>
    </div>
     );
}

export default Home;