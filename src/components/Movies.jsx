/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";



export default function Movies() {

    const [movies, setMovies] = useState([]);
    const showMovies = () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NjA4NTQ0NGEzMDA3ZDc5ZTY0Y2FiNGIwNTZjYmU4YyIsIm5iZiI6MTcyNDg1NTk5OC41NzY3OTIsInN1YiI6IjY2Y2RkNGQyZDNiNWZhZTRkMDhiZjBjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G1p2J4RvMKm0hd1Go-0TA7mhBklInVECgTWnZ2esJgo',
        },
      };

      fetch(
        'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
        options
      )
        .then(response => response.json())
        .then(response => {
            console.log(response.results);
          setMovies(response.results);
        
        })
        .catch(err => console.error(err));
    };

    useEffect(() => {
      showMovies();
    }, []);
  
  return (
    <div >
      <h2>
        {' '}
        {movies.length > 0 ? (
          <div className="movie-list">
            {' '}
            {movies.map(movie => (
       <MovieCard key={movie.id} movie={movie} />
            ))}{' '}
          </div>
        ) : (
          <div>no data found</div>
        )}
      </h2>
    </div>
  );
}
