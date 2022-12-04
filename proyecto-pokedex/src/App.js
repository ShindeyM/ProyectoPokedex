import "./App.css";
import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import Main from "./components/Main";
import Details from "./components/Details";

function App() {
  // const [arrayPokemons, setArrayPokemons] = useState([]);

  // useEffect(() => {
  //   fetch(" https://pokeapi.co/api/v2/pokemon/", {
  //     method: "GET",
  //   })
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setArrayPokemons(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  return (
    <div className="App">
      <Header />
      <Searchbar />
      <Main />
      <Details />
    </div>
  );
}

export default App;
