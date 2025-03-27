# Pesquisa de Pokémon

Este é um projeto pessoal que permite pesquisar informações sobre Pokémon usando a API da PokeAPI. O sistema permite buscar detalhes como nome, tipo, altura, peso e imagem do Pokémon informado.

## Tecnologias Utilizadas
- **Node.js** com **Express** para criar o servidor backend
- **Axios** para realizar requisições HTTP
- **HTML, CSS e JavaScript** para a interface frontend

## Funcionalidades
- **Busca de Pokémon por nome:** Permite ao usuário pesquisar informações sobre um Pokémon pelo seu nome.
- **Sugestões automáticas:** Conforme o usuário digita o nome do Pokémon (a partir de 3 caracteres), o sistema oferece sugestões de nomes.
- **Exibição de informações detalhadas:** Após a pesquisa, o sistema exibe informações como nome, tipo, altura, peso e imagem do Pokémon.

## Como Executar o Projeto

### 1. Clonar o Repositório
```bash
  git clone <URL_DO_REPOSITORIO>
  cd <NOME_DO_PROJETO>
```

### 2. Instalar Dependências
```bash
  npm install
  npm install axios
  npm install express
```

### 3. Iniciar o Servidor
```bash
  node app.js
```
O servidor rodará em `http://localhost:3000`.

### 4. Acessar a Interface
Abra um navegador e acesse `http://localhost:3000` para pesquisar Pokémon.

## Exemplo de Uso
1. Ao acessar a página, digite o nome de um Pokémon no campo de busca (exemplo: Pikachu).
2. O sistema exibirá sugestões automáticas conforme você digita.
3. Após selecionar ou completar o nome do Pokémon, clique no botão "Buscar" para visualizar as informações detalhadas.

## API Utilizada
O projeto utiliza a [PokeAPI](https://pokeapi.co/) uma API pública que fornece dados sobre os Pokémon, incluindo suas características, tipos, imagens, entre outras informações.

## Melhorias Futuras
- **Melhorarias no layout e responsividade:** O design da interface pode ser aprimorado para torná-la mais amigável e responsiva em dispositivos móveis
- **Exibição de estatísticas:** Futuramente, a aplicação pode exibir estatísticas detalhadas, como valores de batalha e habilidades especiais dos Pokémon.

---
Desenvolvido por Tainá Ribeiro 🚀

