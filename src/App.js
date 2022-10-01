import { Routes, Route } from 'react-router-dom'
import React from 'react';
import Header from './components/Header';
import About from './components/about/About';
import Main from './components/main/Main';
import ServicesMain from './components/services/ServicesMain';


function App() {
  return ( 
      <>
      <Header />
      <Routes> 
        <Route path='/' element={<Main />} />
        <Route path='/Services' element={<ServicesMain />}/>
        <Route path='/About' element={<About />}/>
      </Routes>
      </>
   );
}

export default App;

// © Robert Mopsik 2022

