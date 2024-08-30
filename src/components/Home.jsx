/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
import { useEffect, useState } from "react";

import MovieCard from "./MovieCard";

/* eslint-disable no-unused-vars */
const API_URL = `https://api.themoviedb.org/3/search/movie?query=`;

const API_KEY = `&api_key=46085444a3007d79e64cab4b056cbe8c`;

export default function Home() {
  
  const BASE_URL = `https://api.themoviedb.org/3/genre/movie/list?`;
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [genres, setGenres] = useState([])

  const searchMovie = async (title = "batman") => {
    const response = await fetch(`${API_URL} ${title}${API_KEY} `);
    const data = await response.json();
  console.log(data.results)
    setMovies(data.results)
  }

  const fetchCollection = async () => {
    const res = await fetch(BASE_URL + API_KEY);
    const data = await res.json();
    setGenres(data.genres);
  }

  const showCollection = async (name) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/collection?query=${name}&include_adult=false&language=en-US&page=1` + API_KEY
    );
    const data = await res.json();
    console.log("show collection", data)
    setMovies(data.results)
  }
  
  useEffect(() => {
    searchMovie();
    fetchCollection();
  }, [])
  return (
    <>
      <div className="hero">
        <h2>Welcome</h2>
        <h3>
          Millions of movies, TV shows and people to discover. Explore now.
        </h3>
        <div className="search-bar">
          <input
            type="text"
            placeholder="search for a movie"
            onChange={e => setSearch(e.target.value)}
          />
          <button onClick={() => searchMovie(search)}>Search </button>
        </div>
      </div>
      <div className="movie-collection">
        {genres.map(genre => (
          <ul>
            {' '}
            <li key={genre.id} onClick={() => showCollection(genre.name)}>
              {' '}
              {genre.name}{' '}
            </li>
          </ul>
        ))}
      </div>

      <div className="movie-list">
        {movies.length > 0 ? (
          movies.map(movie => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <h2>no data found</h2>
        )}
      </div>
    </>
  );
}
