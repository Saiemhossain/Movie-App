/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */

import { Route, Routes } from 'react-router';
import './App.css'
import Home from './components/Home';
import Movies from './components/Movies';
import Header from './Header';
import MovieDetail from './components/MovieDetail';

function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-movies" element={<Movies/>} />
        <Route path="/movie/:id" element={<MovieDetail/>} />
      </Routes>

     
    </>
  );
}

export default App
