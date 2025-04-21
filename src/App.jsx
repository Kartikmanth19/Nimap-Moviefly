import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Banner from "./components/Banner";
import Find from "./components/Find";
import Popular from "./components/Popular"
import Information from "./components/Information";
import TopRated from "./components/TopRated";
import Upcoming from "./components/Upcoming"


function App() {  
    const [selectMovie, setSelectectmovie] = useState(0)
  const [search, setSearch] = useState("");

   const handleSearch = (query) => {
    setSearch(query); 
  };


  return (
    <Router>
      {}
     
      <Routes>
      <Route path="/" element={<Popular  setSearch={handleSearch} setMovie={setSelectectmovie}/>} />
        <Route path="/top-rated" element={<TopRated setSearch={handleSearch}  setMovie={setSelectectmovie} />} />
        <Route path="/Upcoming" element={<Upcoming setSearch={handleSearch} setMovie={setSelectectmovie}/>} />
        <Route path="/movie/:id" element={<Information setSearch={handleSearch} getMovie={selectMovie}/>} />
        <Route path="/Find" element={<Find query={search} setSearch={handleSearch} setMovie={setSelectectmovie}/>} />
        

      </Routes>
    </Router>
    
    
  )
}

export default App;
