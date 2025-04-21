import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner';
import Page from './Page';



function TopRated(props) {
   const api = "c45a857c193f6302f2b5061c3b85e743";
   const url = "https://api.themoviedb.org/3";
   const img_url = "https://image.tmdb.org/t/p/w500";


 const [movies, setMovies] = useState([]);
 const [page, setPage] = useState(1);
  
  useEffect(() => {
    fetch(`${url}/movie/top_rated?api_key=${api}&language=en-US&page=${page}`)
      .then((res) => res.json())
      .then((data) => setMovies(data.results))
      .catch((err) => console.error(err));
  }, [page]);
  const handleClick = (movie) => {
    props.setMovie(movie);
};
   const handleSearch = (query) => {
    props.setSearch(query); 
  };

  return (
    <>
      <Banner setSearch={handleSearch} />
      
    <div className="square">
      {movies.map((movie) => (
        <div className="grid" key={movie.id}>
           <Link to={`/movie/${movie.id}`}  onClick={()=>handleClick({ id: movie.id})}>
          <img src={`${img_url}${movie.poster_path}`} alt={movie.title} />
          <h3>{movie.title}</h3>
          <p>Rating: {movie.vote_average}</p>
          </Link>
        </div>
      ))}
    </div>
       <Page currentPage={page} onPageChange={setPage} />
    </>
  );
};

export default TopRated;