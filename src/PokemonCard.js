import React from 'react';

const PokemonCard = (props) => {
	return (
		<div style={{border: "1px solid black", margin: 10}}>
			<h1>{props.pokemonData.name}</h1>
			<img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pokemonData.id}.png`}/>
			<p>type: {props.pokemonData.type}</p>
			<p>base experience: {props.pokemonData.base_experience}</p>
		</div>
	);
}

export default PokemonCard;