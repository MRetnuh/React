import React, {useState, useEffect} from 'react'

const TarjetaPokemon = () => {

    const [pokemon, setPokemon] = useState(null)
    const [pokemonNombreOId, setPokemonNombreOId] = useState('pikachu')

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNombreOId}/`)
            .then(response => response.json())
            .then(data => setPokemon(data))
    }, [pokemonNombreOId])

  return (
    <div id='poke-main'>
        <input
        type="text"
        onChange={(e) => setPokemonNombreOId(e.target.value)}
        placeholder='Nombre o ID'
        />
        {pokemon ? (
            <div>
                <h2>{pokemon.name}</h2>
                <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                <p>Altura: {pokemon.height}</p>
                <p>Peso: {pokemon.weight}</p>
                <p>Experiencia base: {pokemon.base_experience}</p>
           </div>
        )
        :
        (
            <p>Cargando información del pokemon u ocurrio un error.</p>
        )
        }
    </div>
  )
}

export default TarjetaPokemon
