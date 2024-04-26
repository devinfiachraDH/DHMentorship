import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';

app.get("/", (req, res) => {
    res.send("The beginning of my server project!")
})

app.get("/pokemon", (req, res) => {
    axios.get(url)
    .then(data => {
        const pokemonUrls = data.data.results.map(pokemon => {
            console.log(pokemon.url);
        });
    })
    .catch(error => {
      res.status(500).json({ error: 'Internal Server Error' });
    });
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

/* CHAT GPT 

need info from 
"id", "name"
"sprites": {
  "front_default" : : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/151.svg"
}

app.get("/pokemon", (req, res) => {
    axios.get(initialUrl)
    .then(response => {
        const pokemonUrls = response.data.results.map(pokemon => pokemon.url);
        const pokemonPromises = pokemonUrls.map(url => axios.get(url));

        Promise.all(pokemonPromises)
          .then(pokemonResponses => {
              const pokemonData = pokemonResponses.map(response => response.data);
              res.json(pokemonData);
          })
          .catch(error => {
              console.error("Error fetching Pokemon data:", error);
              res.status(500).json({ error: 'Internal Server Error' });
          });
    })
    .catch(error => {
        console.error("Error fetching Pokemon list:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    });
});


*/