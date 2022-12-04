import React from "react";
import "./main.css";
import bulbasaur from "../img/bulbasaur.png";

function Main() {
  return (
    <section className="main">
      <div className="poke-card">
        <div className="poke-id">
          <p>#idNum</p>
        </div>

        <div className="poke-img">
          <img src={bulbasaur} alt="pokemon" /> poke img
        </div>

        <div className="poke-name">
          <p>poke name</p>
        </div>
      </div>
    </section>
  );
}

export default Main;
