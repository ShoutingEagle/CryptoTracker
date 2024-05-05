import React from 'react'
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import LandingPage from './components/LandingPage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Dashboard  from './components/Dashboard';
import Details from './components/Details';
import Compare from './components/Compare';


function App() {
  return (
    <>
      
      <BrowserRouter>

      <Header/>
      
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='home' element={<LandingPage/>}/>
          <Route path='dashboard' element={<Dashboard/>}/>
          <Route path='dashboard/:id' element={<Details/>}/>
          <Route path='compare' element={<Compare/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
