import React from "react";
import "./main.css";

function Main(props) {
  return (
    <section className="main">
      {props.arrayPokemons.map((pokemon) => {
        return (
          <>
            <div className="poke-card">
              <div className="poke-id">
                <p>#{pokemon.id}</p>
              </div>

              <div className="poke-img">
                <img src={pokemon.imagen} alt="pokemon" />
              </div>

              <div className="poke-name">
                <p>{pokemon.nombre}</p>
              </div>
            </div>
          </>
        );
      })}
    </section>
  );
}

export default Main;
