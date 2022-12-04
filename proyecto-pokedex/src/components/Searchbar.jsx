import React from "react";
import "./searchbar.css";
// import loupe from "../img/loupe.png";  COMO COLOCAR UNA IMG EN PLACEHOLDER

function Searchbar() {
  return (
    <div className="searchbar">
      <input type="text" placeholder="Buscar" />
    </div>
  );
}

export default Searchbar;
