import axios from 'axios';

export const getPokemon = async name => {
  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return res.data;
};
