import React from "react";
import "./header.css";

function Header(props) {
  return (
    <div className="header">
      <div className="logo-title">
        <img
          src="/img/Pokeball.png"
          alt="Logo Pokeball"
          onClick={props.sorting}
        />
        <h1>Pokédex</h1>
      </div>

      <div>
        <img src="/img/az.png" alt="downArrow" />
      </div>
    </div>
  );
}

export default Header;
