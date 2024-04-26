import express from "express";
import axios from "axios";
import { writeFileSync } from "fs";
import nunjucks from "nunjucks";

const app = express();
const port = 3000;

nunjucks.configure('views', {
  autoescape: true,
  express: app
});

const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';

app.get("/", (req, res) => {
    res.send("The beginning of my server project!")
})

app.get("/pokemon", async (req, res) => {
   const getAllPokemonUrls = await axios.get(url)
   const pokemonPromises = getAllPokemonUrls.data.results.map(pokemon => axios.get(pokemon.url));

   const results = await Promise.all(pokemonPromises);
   const pokemons = results.map((pokemon) => pokemon.data)

   res.send(
    pokemons.map((pokemon) => ({
      name : pokemon.name,
      id : pokemon.id,
      sprite : pokemon.sprites.front_default
   })));


   //writeFileSync("pokemon.json", JSON.stringify(pokemons.map((pokemon) => pokemon.data)))
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
