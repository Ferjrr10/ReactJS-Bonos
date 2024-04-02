import React from 'react';
import { Link } from 'react-router-dom';
import stock from '../stock.jpg';

const Home = () =>{
    return(
        <div>
            <h1>Bienvenido/a</h1>
          <img src={stock} alt="stock" />
        </div>
        
    );
}
export default Home;