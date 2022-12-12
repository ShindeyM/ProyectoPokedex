import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Header from "../components/header/Header";
import Searchbar from "../components/searchbar/Searchbar";
import Main from "../components/main/Main";

function App() {
  const [arrayPokemons, setArrayPokemons] = useState([]);
  const [flag, setFlag] = useState(false);
  // const [orderAbc, setOrderAbc] = useState([]);

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
  }, [flag]);

  // BUSCAR POKEMONS
  const search = (nombre) => {
    if (nombre === "") {
      setFlag(!flag);
    } else {
      let pokemon = arrayPokemons.filter((pokemon) => {
        return pokemon.nombre.toLowerCase().includes(nombre.toLowerCase());
      });
      setArrayPokemons(pokemon);
    }
  };

  // ORDENAR POR ID - ALFABETICAMENTE

  // const sorting = (arrayPokemons) => {
  //   setOrderAbc(arrayPokemons.idd.sort(a, b) => a.idd > b.idd ? 1 : -1);
  // };

  //   const sorting = () => {
  //     arrayPokemons.idd.map(str =>{return Number (str)})
  //     .sort(a, b) => { (a.idd > b.idd ? 1 : -1) }
  // }

  return (
    <div className="App">
      <Header />
      <Searchbar search={search} />
      <Main arrayPokemons={arrayPokemons} />
    </div>
  );
}

export default App;
