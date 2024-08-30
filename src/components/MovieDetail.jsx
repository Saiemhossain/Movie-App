/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */


import { useEffect, useState } from "react"
import { useParams } from "react-router"


export default function MovieDetail() {

  const params = useParams()
  console.log(params.id)
     const IMG_URL = `https://image.tmdb.org/t/p/original/`;
  const URL = `https://api.themoviedb.org/3/movie/${params.id}?`;
  const API_KEY = `&api_key=46085444a3007d79e64cab4b056cbe8c`;
  const [movie, setMovie] = useState([]);

  const fetchMovoie = async() => {
    const res = await fetch(URL + API_KEY);
    const data = await res.json()
    setMovie(data)
  }

  useEffect(() => {
    fetchMovoie()
  }, [params.id])

  return (
    <div>
      {movie.backdrop_path ? (
        <img src={IMG_URL + movie.backdrop_path} alt={movie.title} width="500px" />
      ) : (
        <img src="https://placehold.co/400" />
      )}
      <h2>{movie.id}</h2>
      <h2>{movie.title}</h2>
      <h2>{movie.overview}</h2>
    </div>
  );
}
