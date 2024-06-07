import express from "express";
import axios from "axios";
import path from "path";
import { fileURLToPath } from 'url';
import { writeFileSync } from "fs";
import nunjucks from "nunjucks";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// I will serve static files
app.use(express.static(path.join(__dirname, 'public')))

nunjucks.configure('views', {
  autoescape: true,
  express: app
});

const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';

app.set('view engine', 'html')

app.get("/", (req, res) => {
  res.render('home.html')
})

app.get("/pokemon", async (req, res) => {
   const getAllPokemonUrls = await axios.get(url)
   const pokemonPromises = getAllPokemonUrls.data.results.map(pokemon => axios.get(pokemon.url));

   const results = await Promise.all(pokemonPromises);
   const pokemons = results.map((pokemon) => pokemon.data)

  //  res.send(
  //   pokemons.map((pokemon) => ({
  //     name : pokemon.name,
  //     id : pokemon.id,
  //     sprite : pokemon.sprites.front_default
  //  })));
  let pokemonData =  pokemons.map((pokemon) => ({
      name : pokemon.name,
      id : pokemon.id,
      sprite : pokemon.sprites.front_default
   }))

   //writeFileSync("pokemon.json", JSON.stringify(pokemons.map((pokemon) => pokemon.data)))
    res.render('pokemon.html', {pokemonData})
  })

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
