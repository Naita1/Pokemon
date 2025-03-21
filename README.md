# Pesquisa de Pokémon

Este é um projeto pessoal que permite pesquisar informações sobre Pokémon usando a API da PokeAPI. O sistema permite buscar detalhes como nome, tipo, altura, peso e imagem do Pokémon informado.

## Tecnologias Utilizadas
- **Node.js** com **Express** para criar o servidor backend
- **Axios** para realizar requisições HTTP
- **HTML, CSS e JavaScript** para a interface frontend

## Funcionalidades
- Busca de Pokémon por nome
- Sugestões automáticas ao digitar o nome do Pokémon (a partir de 3 caracteres)
- Exibição de informações detalhadas do Pokémon

## Como Executar o Projeto

### 1. Clonar o Repositório
```bash
  git clone <URL_DO_REPOSITORIO>
  cd <NOME_DO_PROJETO>
```

### 2. Instalar Dependências
```bash
  npm install
```

### 3. Iniciar o Servidor
```bash
  node app.js
```
O servidor rodará em `http://localhost:3000`.

### 4. Acessar a Interface
Abra um navegador e acesse `http://localhost:3000` para pesquisar Pokémon.

## Estrutura do Projeto
```
/
|-- front/
|   |-- index.html
|   |-- styles.css
|   |-- script.js
|
|-- server.js
|-- package.json
|-- README.md
```

## Exemplo de Uso
1. Digite um nome de Pokémon no campo de busca (exemplo: `Pikachu`).
2. O sistema exibirá sugestões automáticas.
3. Clique no botão "Buscar" para obter informações detalhadas do Pokémon.

## API Utilizada
O projeto utiliza a [PokeAPI](https://pokeapi.co/) para obter os dados dos Pokémon.

## Melhorias Futuras
- Melhorar o layout e responsividade
- Exibir estatísticas de batalhas e habilidades especiais

---
Desenvolvido por Tainá Ribeiro 🚀

