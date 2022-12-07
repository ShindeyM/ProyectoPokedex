import React from "react";
// import { useState } from "react";
import "./searchbar.css";
// import loupe from "../img/loupe.png";  COMO COLOCAR UNA IMG EN PLACEHOLDER

function Searchbar(props) {
  const onChangeSearch = (e) => {
    props.search(e.target.value);
  };

  return (
    <div className="searchbar">
      <input type="text" placeholder="Buscar" onChange={onChangeSearch} />
    </div>
  );
}

export default Searchbar;
