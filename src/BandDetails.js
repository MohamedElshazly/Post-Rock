import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SpotifyWebApi from "spotify-web-api-js";

export default function BandDetails() {
  const { id } = useParams();
  const [albums, setAlbums] = useState("");
  const [artist, setArtist] = useState("");

  const spotify = new SpotifyWebApi();
  const params = JSON.parse(localStorage.getItem("params"));
  spotify.setAccessToken(params.access_token);

  useEffect(() => {
    spotify.getArtistAlbums(id, {market:"AG"}).then((data) => {
      setAlbums(data);
    });

    spotify.getArtist(id).then((data) => {
      setArtist(data);
    });
  }, []);
  console.log(albums);
  return (
    <section className="band-details">
      <div className="container">
        <div className="card m-3">
          <h1 className="text-center">{artist.name}</h1>
          {/* <p className="sm text-center py-2"><a href="https://www.monoofjapan.com/">monoofjapan.com</a></p> */}
          {artist.images ? (
            <img className="logo" src={artist.images[0].url} alt="" />
          ) : (
            <h4>Loading...</h4>
          )}

          <h2 className="py-2 ">Bio</h2>
          <p className="lead bio">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam,
            delectus. Culpa enim, deleniti aliquam temporibus aspernatur
            inventore possimus non odit placeat. Exercitationem error
            consequatur unde! Tempora non quos sed voluptate!
          </p>

          <h2 className="py-2">Available on</h2>
          <ul>
            {artist.external_urls ? (
            <li><a href={artist.external_urls.spotify} target="_blank" rel="noreferrer" >Spotify</a></li>
            ) : (
            <h4>Loading...</h4>
          )}
          </ul>

           <h2 className="py-2">Albums</h2> 
          <div className="container flex">
            {albums &&
              albums.items.map((album) => (
                <a href={album.external_urls.spotify} target="_blank" rel="noreferrer" key ={album.id}><div className="card" key={album.id}>
                  {/* <h4 className="hide">{album.name}</h4> */}
                  <img src={album.images[1].url} alt="" />
                </div>
                </a>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
