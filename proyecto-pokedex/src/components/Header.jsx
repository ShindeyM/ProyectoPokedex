import React from "react";
import "./header.css";
import pokeball from "../img/Pokeball.png";
import azArrow from "../img/az.png";

function Header() {
  return (
    <div className="header">
      <div className="logo-title">
        <img src={pokeball} alt="Logo Pokeball" />
        <h1>Pokédex</h1>
      </div>

      <div>
        <img src={azArrow} alt="downArrow" />
      </div>
    </div>
  );
}

export default Header;
