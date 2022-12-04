import React from "react";
import "./details.css";
import backArrow from "../img/arrow-left.svg";
import previous from "../img/left.png";
import next from "../img/next.png";
import weight from "../img/Weight.svg";
import height from "../img/Height.svg";
import bulbasaur from "../img/bulbasaur.png";

function Details() {
  return (
    <div className="details-card">
      {/* HEADER */}
      <div className="details-header">
        <div className="arrow-name">
          <img src={backArrow} alt="backArrow" />
          <p>Poke name</p>
        </div>
        <div>#pokeId</div>
      </div>

      {/* IMAGEN */}
      <section className="img-floating">
        <div className="pokemon-photo">
          <img src={previous} alt="previous page" width="25px" height="25px" />
          <img src={bulbasaur} alt="pokemon" />
          <img src={next} alt="next page" width="25px" height="25px" />
        </div>
      </section>

      {/* SECTION DETAILS */}
      <section className="pokemon-details">
        {/* POKEMON TYPE */}
        <div className="pokemon-type">pokemon type</div>

        {/* ABOUT */}
        <article className="about">
          <h3 className="about-title">About</h3>

          <div className="about-data">
            <div>
              <div className="scales">
                <img src={weight} alt="balance" />
                <p>Kg</p>
              </div>
              <p> Weight</p>
            </div>

            <div>
              <div className="scales">
                <img src={height} alt="rule" />
                <p>m</p>
              </div>
              <p> Height</p>
            </div>

            <div>
              <h5>Moves Info</h5> <p>Moves</p>
            </div>
          </div>
          <p>
            Pokemon Info: Lorem, ipsum dolor sit amet consectetur adipisicing
            elit.
          </p>
        </article>
        <div>
          <h3>Base Stats</h3>
          <div>Stats</div>
        </div>
      </section>
    </div>
  );
}

export default Details;
