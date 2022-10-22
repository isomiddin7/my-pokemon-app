import React from 'react'
import axios from 'axios'
import { Button, Modal } from 'react-bootstrap'
import { useEffect, useState } from 'react';
import './PokemonCard.css'

function PokemonCard(props) {
    const [pokemonData, setPokemonData] = useState({});
    const [show, setShow] = useState(false);

    useEffect(() => {
        axios.get(props.p.url)
            .then(res => setPokemonData(res.data))
            .catch(err => console.log(err.message));
    }, [props.p])
    return (
        <div className='poke-card'>
            <p className='poke-id'>{pokemonData.id}</p>
            <div className='poke-img'>
                {pokemonData.sprites?
                    <img src={pokemonData.sprites.other.dream_world.front_default} alt={props.p.name} />
                    : <span>Loading Image...</span>
                }
            </div>
            <h4 className='poke-name'>{props.p.name}</h4>
            <Button variant="primary" onClick={() => setShow(true)}>View More</Button>

            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassname="modal-50px"
                aria-labelledby="pokemon-name"
                className='window'
            >
                <Modal.Header closeButton>
                    <Modal.Title id="pokemon-name">{props.p.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className='details'>
                    <div className='outlook'>
                        {pokemonData.sprites ?
                                <img src={pokemonData.sprites.other.dream_world.front_default} alt={props.p.name} />
                                : <span>Loading Image...</span>
                        }
                    </div>
                    <div className='infos'>
                        <p>Type(s): {pokemonData.types ?
                                pokemonData.types.map((t, i) => <li key={i}>{t.type.name} </li>)
                                : <span>No type found</span>}
                        </p>
                        <p>Abilities: <img src="https://www.freeiconspng.com/uploads/power-energy-icon-13.png" alt="ability-logo"/>
                            {pokemonData.abilities ? 
                            pokemonData.abilities.map((a, i) => <li key={i}>{a.ability.name}</li>) 
                            : <span>No Ability</span>}
                        </p>
                        <p>Weight: {pokemonData.weight}</p>
                    </div>    
                  </div>
                </Modal.Body>
            </Modal>

        </div>
    )
}

export default PokemonCard