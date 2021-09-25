import React from 'react';

const PokemonCard = () => {
	return (
		<div style={{border: "1px solid black", margin: 10}}>
			<h1>Meowth</h1>
			<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png"/>
			<p>type: normal</p>
			<p>base experience: 100</p>
		</div>
	);
}

export default PokemonCard;