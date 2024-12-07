/* eslint-disable no-undef */
import { Link } from 'react-router-dom';
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
export default function MovieCard({
  movie: {
    id,
    original_title,
    poster_path,
    overview,
    backdrop_path,
    title,
    release_date,
  },
}) {
  const IMG_URL = `https://image.tmdb.org/t/p/original/`;
  return (
    <div className="movie-card">
     
      {poster_path ? (
        <img src={IMG_URL + poster_path} alt={title} />
      ) : (
        <img src="https://placehold.co/400" />
      )}
      <h4>{original_title}</h4>
      <p>{overview.slice(0, 140)}...</p>
      <Link className="link-anchor" to={`/movie/${id}`} >Show More</Link>
    </div>
  );
}
