import React from "react";
import { Link } from "react-router-dom";

export default function SearchResult({ bands }) {
  return (
    <section className="bands">
      <React.Fragment>
        <div className="container grid grid-3">
          {bands &&
            bands.map((band) => (
              <div>
                <Link className="wrap" to={`/band-details/${band.id}`}>
                  <div className="card">
                    <h4>{band.name}</h4>
                    {band.images.length > 0 ? (
                      <img className="logo" src={band.images[1].url} alt="" />
                    ) : (
                      <img className="logo" src="images/mono.jpg" alt="" />
                    )}
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </React.Fragment>
    </section>
  );
}
