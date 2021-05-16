import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import useAuth from "./utils/useAuth";
import ReactAudioPlayer from "react-audio-player";

export default function AlbumDetails() {
  const { idArtist, idAlbum } = useParams();
  const [album, setAlbum] = useState("");
  const [artist, setArtist] = useState("");
  const [tracks, setTracks] = useState("");

  const spotify = useAuth();

  useEffect(() => {
    spotify.getAlbum(idAlbum).then((data) => {
      setAlbum(data);
    });

    spotify.getArtist(idArtist).then((data) => {
      setArtist(data);
    });

    spotify.getAlbumTracks(idAlbum).then((data) => {
      setTracks(data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(tracks);

  return (
    <section className="album-details">
      <Link to={`/band-details/${artist.id}`}>
      <h1 className="text-center lg py-2 back">{artist.name}</h1>
      </Link>
      <div className="container">
        <div className="card m-3">
          <h1 className="text-center">{album.name}</h1>
          {album.images ? (
            <img className="logo" src={album.images[0].url} alt="" />
          ) : (
            <h4>Loading...</h4>
          )}

          <h2 className=" md py-2">Listen to it on</h2>
          <ul>
            {album.external_urls ? (
              <li className="lead">
                <a
                  href={album.external_urls.spotify}
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
          <h2 className="py-2">Tracks</h2>
          {tracks &&
            tracks.items.map((track) => (
              <div className="card player grid-3" key={track.id}>
                <h4 className="md">{track.name}</h4>
                {/* <img src={album.images[1].url} alt="" /> */}
                <ReactAudioPlayer src={track.preview_url} autoplay='true' controls />
                <a
                  href={track.external_urls.spotify}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-spotify fa-2x" />
                  Play on Spotify
                </a>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
