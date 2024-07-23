import React from'react';

const PokeList = ({pokemons}) => {

    return (
        <div>
            {pokemons.length > 0 ? (
            pokemons.map((pokemon, index) => (
                <div key={index}>
                    <h3>{pokemon.name}</h3>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                </div>
            ))
            ):(
        <p> No Pokemon found</p>
        )}
        </div>
    );
};

export default PokeList;