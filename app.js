const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'front')));

app.get('/api/pokemon/:name', async (req, res) => {
  const pokemonName = req.params.name.toLowerCase();
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const pokemon = response.data;
    const data = {
      name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
      types: pokemon.types.map(type => type.type.name),
      height: pokemon.height / 10,
      weight: pokemon.weight / 10,
      image: pokemon.sprites.front_default
    };
    res.json(data);
  } catch (error) {
    res.status(404).json({ 
      error: error.response?.status === 404 ? 'Pokémon não encontrado!' : 'Erro na PokeAPI' 
    });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});