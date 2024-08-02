import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./components/home.js"
import About from "./components/about.js"
import Contact from './components/contact';
import Features from './components/features';
import Navbar from './components/navbar';
function App() {
  return (
    <>
    <div className="App">
      <Navbar/>
      
    <BrowserRouter>
    <Routes>
      <Route path='/' element ={<Home/>}></Route>
      <Route path='/about' element ={<About/>}></Route>
      <Route path='/contact' element ={<Contact/>}></Route>
      <Route path='/features' element = {<Features/>}></Route>
    </Routes>
    </BrowserRouter>
  
    </div>
     
     
    </>
  );
}

export default App;
