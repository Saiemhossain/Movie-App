/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";


export default function Movies() {
   const [movies, setMovies] = useState([]);

 const options = {
   method: 'GET',
   headers: {
     accept: 'application/json',
     Authorization:
       'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NjA4NTQ0NGEzMDA3ZDc5ZTY0Y2FiNGIwNTZjYmU4YyIsIm5iZiI6MTcyNDc2NTM5NC4zNDIwMDAyLCJzdWIiOiI2NmNkZDRkMmQzYjVmYWU0ZDA4YmYwY2UiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.QNTphTEnxKGbw_0GvIHEu6gsLwxUzQPB08sYiJsW_Ik',
   },
 };

  useEffect(() => {
   fetch(
     'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
     options
   )
     .then(res => res.json())
     .then(res => {
       setMovies(res.results);
       console.log(res);
     })
     .catch(err => console.error(err));
 },[])


   return (
     <>
       <h2>
         {' '}
         {movies.length > 0 ? (
           <div className="movie-list">
             {' '}
             {movies.map(movie => (
               <MovieCard movie={movie}> </MovieCard>
             ))}
           </div>
         ) : (
           <div>No data found</div>
         )}{' '}
       </h2>
     </>
   );
    
}
