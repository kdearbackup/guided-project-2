import express from 'express';
import cors from 'cors';
import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();
const url = process.env.MONGO_DB_URL;
const dbName = process.env.MONGO_DB;
const collectionPlanet = process.env.MONGO_DB_PLANETS;
const collectionCharacter = process.env.MONGO_DB_CHARACTERS;
const collectionFilms = process.env.MONGO_DB_FILMS
const app = express();
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Middleware to parse JSON bodies
const PORT = 3000;

//Path and input data for planets
app.get('/planets', async (req, res) => {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection('planets')
        const planets = await collection.find({}).toArray();
        res.json(planets);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Server failed");
    }
});

app.get('/api/planets', async (req, res) => {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection('planets')
        const planets = await collection.find({}).toArray();
        res.json(planets);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Could not load data for planets page");
    }
});
//Path and input data for Characters
app.get('/character', async (req, res) => {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection('characters')
        const planets = await collection.find({}).toArray();
        res.json(characters);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Server failed");
    }
});

app.get('/api/characters', async (req, res) => {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection('characters')
        const characters = await collection.find({}).toArray();
        res.json(characters);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Could not load data for planets page");
    }
});
//Path and input data for films
app.get('/films', async (req, res) => {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection('films')
        const films = await collection.find({}).toArray();
        res.json(films);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Server failed");
    }
});

app.get('/api/films', async (req, res) => {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection('films')
        const films = await collection.find({}).toArray();
        res.json(films);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Could not load data for planets page");
    }
});
//Path and input data for films_characters
app.get('/films_characters', async (req, res) => {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection('films_characters')
        const films_characters = await collection.find({}).toArray();
        res.json(films_characters);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Server failed");
    }
});

app.get('/api/filmsCharacters', async (req, res) => {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection('films_characters')
        const films_characters = await collection.find({}).toArray();
        res.json(films_characters);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Could not load data for planets page");
    }
});


//Path and input data for films_planets
app.get('/films_planets', async (req, res) => {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection('films_planets')
        const films_planets = await collection.find({}).toArray();
        res.json(films_planets);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Server failed");
    }
});

app.get('/api/filmsPlanets', async (req, res) => {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection('films_planets')
        const films_planets = await collection.find({}).toArray();
        res.json(films_planets);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Could not load data for planets page");
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});