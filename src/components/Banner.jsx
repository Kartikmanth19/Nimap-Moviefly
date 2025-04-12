import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Banner.css';


const Banner = ({ setSearch }) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  

  const handleSearch = () => {if (query.trim()) {setSearch(query); navigate("/Find");setQuery("");
    }
  };

  return (
    <nav className="Banner">
      <Link to={"/"} className="Name" href="/">MovieDb</Link>
      <div className="category">
        <a href="/">Popular</a>
        <a href="/top-rated">Top Rated</a>
        <a href="/upcoming">Upcoming</a>
      </div>
      <div className="searchbar">
        <input
          type="text" placeholder="Enter" value={query} onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </nav>
  );
};

export default Banner;
