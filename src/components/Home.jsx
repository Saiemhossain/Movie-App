/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import bg from '../assets/bg.jpg';
import MovieCard from './MovieCard';

const API_URL = `https://api.themoviedb.org/3/search/movie?query=`;

const API_KEY = `&api_key=46085444a3007d79e64cab4b056cbe8c`;


export default function Home() {

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("")

  const searchMovie = async(title= "Batman") => {
    const response = await fetch(`${API_URL}${title}${API_KEY} `)
    const data = await response.json();
    console.log(data.results);
    setMovies(data.results)
  }

  useEffect(() => {
    searchMovie()
  },[])
  return (
    <>
      <div>
        <div
          className="hero-sec"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '80vh',
            width: '100%',
          }}
        >
          <h1>Welcome,</h1>
          <h2>
            Millions of movies, TV shows and people to discover. Explore now.
          </h2>

          <div className="search-input">
            <input className="input-sec"
              type="text"
              placeholder="Search for a movie..."
              onChange={e => setSearch(e.target.value)}
            />
            <div className="btn-hero">
              <button onClick={() => searchMovie(search)}>Search</button>
            </div>
          </div>
        </div>
      </div>
      <h2 className="heading">Your Favorite Movies Here...</h2>
      <div>
        {movies.length > 0 ? (
          <div className="movie-list">
            {movies.map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <h2>Not Found</h2>
        )}
      </div>
    </>
  );
}
