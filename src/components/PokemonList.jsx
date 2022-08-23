import React from 'react'
import { useEffect, useState } from 'react';
import PokemonCard from './PokemonCard';
import SearchPokemon from './SearchPokemon';
import './PokemonList.css';

function PokemonList(props) {
    const [pokemon, setPokemon] = useState(props.pokemon);

    useEffect(() => {
        setPokemon(props.pokemon)
    }, [props.pokemon]);

  return (
    <div className='poke-list'>
        <SearchPokemon setPokemon={setPokemon} pokemon={props.pokemon}/>
        <div className='poke-data'>
            {pokemon.length > 0 ?
                pokemon.map((p, i) => <PokemonCard p={p} key={i}/>)
                : <p>Loading...</p>
            }
        </div>
    </div>
  )
}

export default PokemonList