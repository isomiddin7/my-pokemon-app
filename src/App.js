import axios from "axios";
import { useEffect, useState } from "react";
import PokemonList from "./components/PokemonList";
import './App.css';


const allPokemonGeneration = [
  [0, 151, 0],
  [1, 100, 151],
  [2, 135, 251,],
  [3, 107, 386],
  [4, 156, 493],
  [5, 72, 649],
  [6, 88, 721],
  [7, 96, 809],
  [8, 11, 905],
]

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [allPokemon, setAllPokemon] = useState(allPokemonGeneration[0]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${allPokemon[1]}&offset=${allPokemon[2]}`)
      .then(res => {
        console.log(res);
        setPokemon(res.data.results);
      })
      .catch(err => console.log(err.message));
      setLoading(false)
  }, [allPokemon]);

    function handleClick(e) {
      switch (e.target.name) {
        case 'previous':
            setAllPokemon(allPokemonGeneration[allPokemon[0] - 1])
          break;
        case 'next':
          setAllPokemon(allPokemonGeneration[allPokemon[0] + 1])
          break;
        default:
          break;
      }
    }
    if(loading) return "Loading..."
  return (
   <div className="container">
      <div className="btn-container">
        {allPokemon[2] === 0 ?
           <button  disabled="disabled">Previous Page</button> :
           <button className="prev" name="previous" onClick={handleClick}>Previous Page</button>
        }
        <h1>Welcome to the {allPokemon[0] + 1} Pokedex Generation</h1>
        {allPokemon[2] === 905 ?
           <button  disabled="disabled">Next Page</button> :
           <button className="Next" name="next" onClick={handleClick}>Next Page</button>
        }
      </div>
      <PokemonList pokemon={pokemon}/>
   </div>
  );
}

export default App;
