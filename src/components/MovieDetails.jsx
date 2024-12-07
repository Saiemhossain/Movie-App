/* eslint-disable no-unused-vars */
// import { useEffect, useState } from "react";

import { useEffect, useState } from "react";
import { useParams } from "react-router";
 const IMG_URL = `https://image.tmdb.org/t/p/original/`;

export default function MovieDetails() {
  const params = useParams();
  console.log(params.id);

  const [movie, setMovie] = useState([]);

  const URL = `https://api.themoviedb.org/3/movie/${params.id}?`;

  
  const API_KEY = `&api_key=46085444a3007d79e64cab4b056cbe8c`;
  
  const fetchMovie = async () => {
    const response = await fetch(URL + API_KEY);
    const data = await response.json();
    console.log(data);
    setMovie(data)
  }
  useEffect(() => {
    fetchMovie();
},[params.id])
  return (
    <div className="movie-detail">
      {movie.backdrop_path ? (
        <img src={IMG_URL + movie.backdrop_path} alt={movie.title}  />
      ) : (
        <img src="https://placehold.co/400" />
      )}
      <h1>{movie.title}</h1>
      <h4>{movie.overview}</h4>
    </div>
  );
}

