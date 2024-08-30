/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function MovieCard({movie : {id,title, overview,poster_path}}) {
   const IMG_URL = `https://image.tmdb.org/t/p/original/`;
  return (
    <div className="movie-item">
      {poster_path ? (
        <img src={IMG_URL + poster_path} alt={title} width="300px" />
      ) : (
        <img src="https://placehold.co/400" />
      )}
      <h6> {title} </h6>
      <h5> {overview.slice(0, 70)} </h5>
      <Link to={`/movie/ ${id}`} > View Details </Link>
    </div>
  );
}
