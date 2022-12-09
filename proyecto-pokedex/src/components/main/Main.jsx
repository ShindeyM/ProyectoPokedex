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
              <div className={"poke-card"}>
                <div className="poke-id">
                  <p>#{pokemon.idd}</p>
                </div>

                <div className="poke-img">
                  <img src={pokemon.imagen} alt="pokemon" />
                </div>

                <div className="poke-name">
                  <p>{pokemon.nombre}</p>
                </div>
              </div>
            </>
          </Link>
        );
      })}
    </section>
  );
}

export default Main;
