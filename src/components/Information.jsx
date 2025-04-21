import React, { useEffect, useState } from "react";
import "./Information.css";
import Banner from "./Banner";

const Information = (props) => {
  const api = "c45a857c193f6302f2b5061c3b85e743";
  const url = "https://api.themoviedb.org/3";
  const img_url = "https://image.tmdb.org/t/p/w500";
  const bgimg_url = "https://image.tmdb.org/t/p/original";

  const id = props.getMovie.id;
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetch(`${url}/movie/${id}?api_key=${api}&language=en-US`)
      .then((res) => res.json())
      .then((data) => setMovie(data));

    fetch(`${url}/movie/${id}/credits?api_key=${api}&language=en-US`)
      .then((res) => res.json())
      .then((data) => setCast(data.cast));
  }, [id]);
  const handleSearch = (query) => {
    props.setSearch(query);
  };
  if (!movie) return <p className="err">Loading...</p>;

  return (
    <>
     <Banner setSearch={handleSearch} />
    <div className="moviepage">
      <div className="infodisplay">
        <div className="section1">
          <img  className="coverpic" src={`${img_url}${movie.poster_path}`}  alt={movie.title} />
          <div className="moviedetail">
            <h2>{movie.title}</h2>
            <p className="rating">Rating : {movie.vote_average}</p>
            <p className="movietype">
              {movie.runtime && <span>{movie.runtime} min</span>}{" "}
              {movie.genres?.map((g) => g.name).join(", ")}
            </p>
            <p className="releasedate">
              Release Date : {new Date(movie.release_date).toDateString()}
            </p>
            <h3>Overview</h3>
            <p className="desc">{movie.overview}</p>
          </div>
        </div>

        <div
          className="section2"
          style={{
            backgroundImage: `url(${bgimg_url}${movie.backdrop_path})`,
          }}
        ></div>
      </div>

      <div className="castpage">
        <h3>Cast</h3>
        <div className="square">
          {cast.map((c) => (
            <div className="actor" key={c.id}>
              <img src={ c.profile_path ? `${img_url}${c.profile_path}`: "/fallback.png" } alt={c.name} />
              <div className="actordetails">
                <h4>{c.name}</h4>
                <p>{c.character}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </>

  );
};

export default Information;
