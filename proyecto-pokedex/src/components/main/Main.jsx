import React from "react";
import { Link } from "react-router-dom";
import "./main.css";

function Main(props) {
  return (
    <section className="main">
      {props.arrayPokemons.map((pokemon) => {
        return (
          <Link to={`pokemon/${pokemon.id}`}>
            <>
              <div
                className="poke-card"
                style={{ borderColor: pokemon.color1 }}
              >
                <div className="poke-id" style={{ color: pokemon.color1 }}>
                  <p>#{pokemon.idd}</p>
                </div>

                <div className="poke-img">
                  <img src={pokemon.imagen} alt="pokemon" />
                </div>

                <div
                  className="poke-name"
                  style={{ backgroundColor: pokemon.color1 }}
                >
                  <p>{pokemon.nombre}</p>
                </div>
              </div>
            </>
          </Link>
        );
        // { "pokemon-color" = pokemon.color1 }
      })}
    </section>
  );
}

export default Main;
