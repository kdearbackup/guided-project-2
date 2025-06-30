import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Middleware to parse JSON bodies
const PORT = 3000;

app.get('/', async (req, res) => {
    try {
        res.json("Running server!");
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Server failed");
    }
});

app.get('/api/planets', async (req, res) => {
    try {
        res.json("Planet data");
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Could not load data for planets page");
    }
});

app.get('/api/characters', async (req, res) => {
    try {
        const characters = [
            {
              "id": 1,
              "name": "Luke Skywalker",
              "gender": "male",
              "skin_color": "fair",
              "hair_color": "blond",
              "height": "172",
              "eye_color": "blue",
              "mass": "77",
              "homeworld": 1,
              "birth_year": "19BBY",
              "species_id": 1
            },
            {
              "id": 2,
              "name": "C-3PO",
              "gender": "n/a",
              "skin_color": "gold",
              "hair_color": "n/a",
              "height": "167",
              "eye_color": "yellow",
              "mass": "75",
              "homeworld": 1,
              "birth_year": "112BBY",
              "species_id": 2
            },
            {
              "id": 3,
              "name": "R2-D2",
              "gender": "n/a",
              "skin_color": "white, blue",
              "hair_color": "n/a",
              "height": "96",
              "eye_color": "red",
              "mass": "32",
              "homeworld": 8,
              "birth_year": "33BBY",
              "species_id": 2
            },
            {
              "id": 4,
              "name": "Darth Vader",
              "gender": "male",
              "skin_color": "white",
              "hair_color": "none",
              "height": "202",
              "eye_color": "yellow",
              "mass": "136",
              "homeworld": 13,
              "birth_year": "41.9BBY",
              "species_id": 1
            }, ]
        res.json(characters);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Could not load data for planets page");
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});