import express from 'express';
import cors from 'cors';
import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();
const url = process.env.MONGO_DB_URL;
const dbName = process.env.MONGO_DB;
const collectionPlanet = process.env.MONGO_DB_PLANETS;
const collectionCharacter = process.env.MONGO_DB_CHARACTERS;
const collectionFilms = process.env.MONGO_DB_FILMS;
const collFilmChars = process.env.MONGO_DB_FILMS_CHARACTERS;
const collFilmPlans = process.env.MONGO_DB_FILMS_PLANETS;
const app = express();
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Middleware to parse JSON bodies
const PORT = 3000;


//Path and input data for Planets
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
//Path and input data for characters/:id
app.get('/api/characters/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection(collectionCharacter)
        const result = await collection.findOne ({id: id});
        if (result){
            res.status(200).send(result);
        }else {
            res.status(404).send('No character found');
        }
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Could not load data for character page");
    }
});
//Path and input data for film/:id
app.get('/api/films/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection(collectionFilms)
        const result = await collection.findOne ({id: id});
        if (result){
            res.status(200).send(result);
        }else {
            res.status(404).send('No character found');
        }
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Could not load data for films page");
    }
});
//Path and input data for planets/:id
app.get('/api/planets/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection(collectionPlanet)
        const result = await collection.findOne ({id: id});
        if (result){
            res.status(200).send(result);
        }else {
            res.status(404).send('No character found');
        }
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Could not load data for planets page");
    }
});
//Path and input data for films/:id/characters
app.get('/api/films/:id/characters', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection(collFilmChars)
        const result = await collection.find({ film_id: id }).toArray();
        if (result){
            res.status(200).send(result);
        }else {
            res.status(404).send('No character found');
        }
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Could not load data for characters page");
    }
});
//Path and input data for films/:id/planets
app.get('/api/films/:id/planets', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection(collFilmPlans)
        const result = await collection.find({ film_id: id }).toArray();
        if (result){
            res.status(200).send(result);
        }else {
            res.status(404).send('No character found');
        }
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Could not load data for characters page");
    }
});
//Path and input data for characters/:id/films
app.get('/api/characters/:id/films', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection(collFilmChars)
        const result = await collection.find({ character_id: id }).toArray();
        if (result){
            res.status(200).send(result);
        }else {
            res.status(404).send('No character found');
        }
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Could not load data for characters page");
    }W
});
//Path and input data for planets/:id/films
app.get('/api/planets/:id/films', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection(collFilmPlans)
        const result = await collection.find({ film_id: id }).toArray();
        if (result){
            res.status(200).send(result);
        }else {
            res.status(404).send('No films found');
        }
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Could not load data for films page");
    }
});
//Path and input data for planets/:id/characters
app.get('/api/planets/:id/characters', async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const client = await MongoClient.connect(url);
      const db = client.db(dbName);
      const collection = db.collection(collectionCharacter);
      const result = await collection.find({ homeworld: id }).toArray();
   
      if (result) {
        res.status(200).send(result);
      } else {
        res.status(404).send('No characters found');
      }
    } catch (err) {
      console.error('Error', err);
      res
        .status(500)
        .send('Death star blew the characters up - no characters found');
    }
  });

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});