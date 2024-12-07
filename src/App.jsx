/* eslint-disable react/jsx-no-undef */

import { Route, Routes } from 'react-router';
import './App.css'
import Header from './components/Header';
import Home from './components/Home';
import Movies from './components/Movies'
import MovieDetails from './components/MovieDetails';


function App() {
  return (
    <>
      <Header ></Header>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/all-movies' element={<Movies/>} />
        <Route path='/movie/:id' element={<MovieDetails/>} />
      </Routes>
      {/* <Movies></Movies> */}
    </>
  ); 
  

 
}

export default App
