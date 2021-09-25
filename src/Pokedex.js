import React, {useState, useEffect} from 'react';
import PokemonCard from './PokemonCard';
import pokemonsData from './pokemons';

const Pokedex = () => {
	const [pokemons, setPokemons] = useState(null);

	useEffect(()=>{
		setPokemons(pokemonsData);
	},[]);

	return (
		<div className="">
			<h1>{pokemons ? pokemons[0].name: 'no pokemons'}</h1>
	      	<PokemonCard/>
	      	<PokemonCard/>
	      	<PokemonCard/>
	      	<PokemonCard/>
		</div>
	);
};

export default Pokedex;
