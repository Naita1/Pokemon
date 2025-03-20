document.getElementById('pokemon-input').addEventListener('input', async function() {
  const pokemonInput = this.value.trim().toLowerCase();
  
  if (pokemonInput.length >= 3) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0`);
      const data = await response.json();
      
      const datalist = document.getElementById('pokemon-suggestions');
      datalist.innerHTML = '';
      
      data.results.forEach(pokemon => {
        if (pokemon.name.startsWith(pokemonInput)) {
          const option = document.createElement('option');
          option.value = pokemon.name;
          datalist.appendChild(option);
        }
      });
    } catch (error) {
      console.error('Erro ao buscar sugestões de Pokémon:', error);
    }
  }
});

async function fetchPokemon() {
  const pokemonInput = document.getElementById('pokemon-input');
  const pokemonName = pokemonInput.value.trim().toLowerCase();

  if (!pokemonName) {
    alert('Por favor, digite o nome de um Pokémon!');
    return;
  }

  try {
    const response = await fetch(`http://localhost:3000/api/pokemon/${pokemonName}`);
    if (!response.ok) throw new Error('Pokémon não encontrado!');
    const data = await response.json();

    document.getElementById('pokemon-name').textContent = data.name;
    document.getElementById('pokemon-types').textContent = data.types.join(', ');
    document.getElementById('pokemon-height').textContent = `${data.height} m`;
    document.getElementById('pokemon-weight').textContent = `${data.weight} kg`;
    document.getElementById('pokemon-image').src = data.image;
    document.getElementById('pokemon-image').alt = `Imagem de ${data.name}`;
  } catch (error) {
    alert(error.message);
    document.getElementById('pokemon-name').textContent = '';
    document.getElementById('pokemon-types').textContent = '';
    document.getElementById('pokemon-height').textContent = '';
    document.getElementById('pokemon-weight').textContent = '';
    document.getElementById('pokemon-image').src = '';
  }
}

window.onload = () => {
  document.getElementById('pokemon-input').value = 'pikachu';
  fetchPokemon();
};
