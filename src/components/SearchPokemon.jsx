import React from 'react'
import { useState } from 'react'
import './SearchPokemon.css'

function SearchPokemon(props) {
    const [search, setSearch] = useState('');

    function handleSubmit(e) {
        e.prevetDefault();
        props.setPokemon(props.pokemon.filter(p => {
           return  p.name.includes(search);
        }))
        
    }
    
    function handleChange(e) {
        setSearch(e.target.value);
        props.setPokemon(props.pokemon.filter(p => {
           return p.name.includes(e.target.value);
        }))
    }
  return (
    <form onSubmit={handleSubmit}>
        <input value={search} onChange={handleChange} placeholder="Search Pokemon"/>
    </form>
  )
}

export default SearchPokemon