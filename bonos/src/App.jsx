import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import './App.css';
import Login from './Component/Login.jsx'
import Login1 from './Component/Login1.jsx'
import Home from './Component/Home.jsx'
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Profile from './Component/Profile.jsx'
import Bonds from './Component/Bonds.jsx';
import Bonds1 from './Component/Bonds1.jsx'
import stock from './stock.jpg';
import {useNavigate} from 'react-router-dom'
import App1 from './Component/Bonds1.jsx';
import ListBonds from './Component/ListBonds.jsx';





function App() {
  

  const navigate = useNavigate();

  const navigateTo = () => navigate.push('/Bonds');//eg.history.push('/login');

  const handleClick = () => {
    // Now you can navigate programmatically to other pages using navigate
    navigate('/Bonds');
  };
  const handleClick1 = () => {
    // Now you can navigate programmatically to other pages using navigate
    navigate('/');
  };
  const handleClick2 = () => {
    // Now you can navigate programmatically to other pages using navigate
    navigate('/ListBonds');
  };

  return (

      <React.Fragment>
      <Routes>
        <Route exact path='/Login1' element={<Login1/>}/>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/ListBonds' element={<ListBonds/>}/>        
        <Route exact path='/Bonds' element={<Bonds/>}/>
      </Routes>
      <div>
      <button onClick={() => navigate(-1)}>Go back</button>
      <button onClick={handleClick}>Bonos</button>
      <button onClick={handleClick1}>Home</button>
      <button onClick={handleClick2}>Bonds 2</button>
      <button onClick={() => navigate(1)}>Go forward</button>
      </div>
      </React.Fragment>
      

      
  );
}

export default App;