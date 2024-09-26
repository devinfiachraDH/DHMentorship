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

const instance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2'
});


app.set('view engine', 'html')

app.get("/", (req, res) => {
  res.render('home.html')
})

app.get("/pokemon", async (req, res) => {
   const getAllPokemonUrls = await instance.get(`/pokemon?limit=50&offset=${req.query.next}`)
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
      name : (pokemon.name).toUpperCase(),
      id : pokemon.id,
      sprite : pokemon.sprites.front_default
   }))

   //writeFileSync("pokemon.json", JSON.stringify(pokemons.map((pokemon) => pokemon.data)))
    res.render('pokemon.html', {pokemonData})
  })

app.get("/pokedex/:id", async (req, res) => {
  
  const getPokemonInfo = await instance.get(`/pokemon/${req.params.id}`)

  let pokemonData = {
    name : getPokemonInfo.data.name,
    id : getPokemonInfo.data.id,
    sprite : getPokemonInfo.data.sprites.front_default
 }
  
  res.render("pokedex.html", {"pokemon": pokemonData});
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
