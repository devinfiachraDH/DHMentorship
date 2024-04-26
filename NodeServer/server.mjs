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