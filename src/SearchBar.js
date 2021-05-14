import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { get } from './utils/api';
import SpotifyWebApi from 'spotify-web-api-js';
import Footer from "./Footer";
// import ListBands from "./ListBands";
import SearchResult from "./SearchResult";

export default function SearchBar() {

  const [searchTerm, setSearchTerm] = useState(""); 
  const [postRockBands, setPostRockBands] = useState(""); 
  
  const spotify = new SpotifyWebApi();
  const params = JSON.parse(localStorage.getItem('params'));
  spotify.setAccessToken(params.access_token);

  const handleChange = (e) =>{
    e.preventDefault();
    setSearchTerm(e.target.value);
    console.log(searchTerm);
  }

  useEffect(() => {
    spotify.searchArtists('genre:"post rock" ' + searchTerm, {limit:50}).then((data) => {
      console.log(data.artists.items)
      setPostRockBands(data.artists.items);
    })
  }, [searchTerm])
  
  
  

  return (
    <div className="search-bar">
      <div className="container flex">
        <div className="search-icon">
          <span className="fas fa-search"></span>
          <input type="search" value={searchTerm} onChange={handleChange} placeholder="search for bands..." />
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
          </ul>
        </nav>
      </div>
      <SearchResult bands={postRockBands}/>
      <Footer />
      {/* <ListBands /> */}
    </div>
  );
}
