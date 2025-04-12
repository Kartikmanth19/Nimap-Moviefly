import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Popular.css';


const Popular = (props) => {
  const api = "c45a857c193f6302f2b5061c3b85e743";
  const url = "https://api.themoviedb.org/3";
  const img_url = "https://image.tmdb.org/t/p/w500";

  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchPopularMovies();
  }, [page]);

  const fetchPopularMovies = async () => {
    try {
      const res = await fetch( `${url}/movie/popular?api_key=${api}&language=en-US&page=${page}`);
      const data = await res.json();
      setMovies(data.results);
    } catch (error) {
      console.error("Failed to load movies...", error);
    }
  };
  const handleClick = (movie) => {
    props.setMovie(movie);
};
 
  return (
    <>
    <div className="square">
     
      {movies.map((movie) => (
        <div className="grid" key={movie.id}>
           <Link to={`/movie/${movie.id}`} onClick={()=>handleClick({ id: movie.id})}   >
          <img src={`${img_url}${movie.poster_path}`} alt={movie.title} />
          <h3>{movie.title}</h3>
          <p>Rating: {movie.vote_average}</p>
          </Link>
          </div>
      ))}

    </div>

<div className="Nextpage">
<button disabled={page === 1} onClick={() => setPage((p) => p - 1)}> Prev</button>
<span>Section {page}</span>
<button onClick={() => setPage((p) => p + 1)}>  Next  </button>
</div>
</>
  );
};

export default Popular;
