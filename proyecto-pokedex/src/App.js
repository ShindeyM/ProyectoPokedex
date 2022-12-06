import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Searchbar from "./components/searchbar/Searchbar";
import Main from "./components/main/Main";
import Details from "./components/details/Details";

function App() {
  const [arrayPokemons, setArrayPokemons] = useState([]);

  // OBTENER DATA POKEMONS
  useEffect(() => {
    fetch("http://localhost:3000/pokemons", {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setArrayPokemons(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // BUSCAR POKEMONS
  const search = (nombre) => {
    if (nombre === "") {
      setArrayPokemons(pokemons);
    } else {
      let pokemon = arrayPokemons.filter((pokemon) => {
        return pokemon.nombre.toLowerCase().includes(nombre.toLowerCase());
      });
      setArrayPokemons(pokemon);
    }
  };

  return (
    <div className="App">
      <Header />
      <Searchbar search={search} />
      <Main arrayPokemons={arrayPokemons} />
      <Details />
    </div>
  );
}

export default App;
