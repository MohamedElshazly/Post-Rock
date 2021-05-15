import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import SearchResult from "./SearchResult";
import  useAuth  from './utils/useAuth'; 


export default function SearchBar() {

  const [searchTerm, setSearchTerm] = useState(""); 
  const [postRockBands, setPostRockBands] = useState(""); 
  
  const spotify = useAuth();
  
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
