import React from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import "./details.css";

function Details(props) {
  const { idPokemon } = useParams();
  const [pokemon, setPokemon] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/pokemons/" + idPokemon, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        setPokemon(data);
      })

      .catch((error) => {
        console.log(error);
      });
  }, [idPokemon]);

  // const render = () => {
  //   idPokemon(isNaN) && <Link to="../"></Link>;
  // };

  return (
    <div className="details-card" style={{ backgroundColor: pokemon.color1 }}>
      {/* HEADER */}
      <div className="details-header">
        <div className="arrow-name">
          <Link to="../">
            <img src="/img/arrow-left.svg" alt="backArrow" className="arrows" />
          </Link>

          <h2>{pokemon?.nombre}</h2>
        </div>
        <div>
          <p>#{pokemon?.idd}</p>
        </div>
      </div>

      {/* IMAGEN */}
      <section className="img-floating">
        <div className="pokemon-photo">
          <Link to={`/pokemon/${pokemon.id - 1}`}>
            <img
              src="/img/left.png"
              alt="previous page"
              width="25px"
              height="25px"
              className="arrows"
            />
          </Link>

          <img src={pokemon?.imagen} alt="pokemon" />
          <Link to={`/pokemon/${pokemon.id + 1}`}>
            <img
              src="/img/next.png"
              alt="next page"
              width="25px"
              height="25px"
              className="arrows"
            />
          </Link>
        </div>
      </section>

      {/* SECTION DETAILS */}
      <section className="pokemon-details">
        {/* POKEMON TYPE */}
        <div className="pokemon-type">
          <div style={{ backgroundColor: pokemon.color1 }}>
            {pokemon?.types?.type1}
          </div>
          <div style={{ backgroundColor: pokemon.color2 }}>
            {pokemon?.types?.type2}
          </div>
        </div>
        {/* ABOUT */}
        <article className="about">
          <h3 className="about-title" style={{ color: pokemon.color1 }}>
            About
          </h3>

          <div className="about-data">
            <div className="about-scales">
              <div className="scales">
                <img src="/img/Weight.svg" alt="balance" />
                <h5>{pokemon?.weight}</h5>
              </div>
              <p> Weight</p>
            </div>

            <div className="about-scales">
              <div className="scales">
                <img src="/img/Height.svg" alt="rule" />
                <h5>{pokemon?.height}</h5>
              </div>
              <p> Height</p>
            </div>

            <div className="about-moves">
              <h5>{pokemon?.moves}</h5> <p>Moves</p>
            </div>
          </div>
          <p className="about-description">{pokemon?.description}</p>
        </article>
        {/* BASE STATS */}
        <div className="base-stats">
          <h3 className="stats-title" style={{ color: pokemon.color1 }}>
            Base Stats
          </h3>
          <div>
            <ul>
              <li>
                HP <span className="stats-number">{pokemon?.stats?.hp}</span>
                <span>
                  <input
                    className="stats-bars"
                    type="range"
                    min={0}
                    max={100}
                    value={pokemon?.stats?.hp}
                  />
                </span>
              </li>
              <li>
                ATK <span className="stats-number">{pokemon?.stats?.atk}</span>
                <span>
                  <input
                    className="stats-bars"
                    type="range"
                    min={0}
                    max={100}
                    value={pokemon?.stats?.atk}
                  />
                </span>
              </li>
              <li>
                DEF <span className="stats-number">{pokemon?.stats?.def}</span>
                <span>
                  <input
                    className="stats-bars"
                    type="range"
                    min={0}
                    max={100}
                    value={pokemon?.stats?.def}
                  />
                </span>
              </li>
              <li>
                SATK
                <span className="stats-number">{pokemon?.stats?.satk}</span>
                <span>
                  <input
                    className="stats-bars"
                    type="range"
                    min={0}
                    max={100}
                    value={pokemon?.stats?.satk}
                  />
                </span>
              </li>
              <li>
                SDEF
                <span className="stats-number">{pokemon?.stats?.sdef}</span>
                <span>
                  <input
                    className="stats-bars"
                    type="range"
                    min={0}
                    max={100}
                    value={pokemon?.stats?.sdef}
                  />
                </span>
              </li>
              <li>
                SPD <span className="stats-number">{pokemon?.stats?.spd}</span>
                <span>
                  <input
                    className="stats-bars"
                    type="range"
                    min={0}
                    max={100}
                    value={pokemon?.stats?.spd}
                  />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Details;
