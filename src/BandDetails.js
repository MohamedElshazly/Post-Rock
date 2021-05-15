import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import useAuth from "./utils/useAuth";

export default function BandDetails() {
  const { id } = useParams();
  const [albums, setAlbums] = useState("");
  const [artist, setArtist] = useState("");

  const spotify = useAuth();

  useEffect(() => {
    spotify.getArtistAlbums(id).then((data) => {
      setAlbums(data);
    });

    spotify.getArtist(id).then((data) => {
      setArtist(data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // console.log(albums);

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

          <h2 className="md py-2">Available on</h2>
          <ul>
            {artist.external_urls ? (
              <li className="lead">
                <a
                  href={artist.external_urls.spotify}
                  target="_blank"
                  rel="noreferrer"
                >
                  <b>
                    <i className="fab fa-spotify fa-2x" />
                    Spotify
                  </b>
                </a>
              </li>
            ) : (
              <h4>Loading...</h4>
            )}
          </ul>

          <h2 className="py-2">Albums</h2>
          <div className="container flex">
            {albums &&
              albums.items.map((album) => (
                <Link to={`/album-details/${id}/${album.id}`} key={album.id}>
                  <div className="card" key={album.id}>
                    {/* <h4 className="hide">{album.name}</h4> */}
                    <img src={album.images[1].url} alt="" />
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
