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

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});