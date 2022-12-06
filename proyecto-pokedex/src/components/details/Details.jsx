import React from "react";
import { useState } from "react";
// import { useParams } from "react-router-dom";
import { useEffect } from "react";
import "./details.css";

function Details(props) {
  // const { idPokemon } = useParams();
  const [pokemon, setPokemon] = useState("");

  // useEffect(() => {
  //   fetch("http://localhost:3000/pokemons/" + idPokemon, {
  //     method: "GET",
  //   })
  //     .then((response) => {
  //       return response.json();
  //     })

  //     .then((data) => {
  //       setPokemon(data);
  //     })

  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  return (
    <div className="details-card">
      {/* HEADER */}
      <div className="details-header">
        <div className="arrow-name">
          <img src="/img/arrow-left.svg" alt="backArrow" className="arrows" />

          <p>{pokemon.nombre}</p>
        </div>
        <div>
          <p>{pokemon.id}</p>
        </div>
      </div>

      {/* IMAGEN */}
      {/* <section className="img-floating"> */}
      <div className="pokemon-photo">
        <img
          src="/img/left.png"
          alt="previous page"
          width="25px"
          height="25px"
          className="arrows"
        />
        <img src="/img/bulbasaur.png" alt="pokemon" />
        <img
          src="/img/next.png"
          alt="next page"
          width="25px"
          height="25px"
          className="arrows"
        />
      </div>
      {/* </section> */}

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
                <img src="/img/Weight.svg" alt="balance" />
                <p>Kg</p>
              </div>
              <p> Weight</p>
            </div>

            <div>
              <div className="scales">
                <img src="/img/Height.svg" alt="rule" />
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
