const express = require('express');
const { Pool } = require('pg'); // Importer le module pg
const dotenv = require('dotenv');
const cors = require('cors');  // Importer cors

// Charger les variables d'environnement depuis le fichier .env
dotenv.config();

const app = express();
const port = 3000;

// Configurer le middleware CORS pour autoriser les requêtes venant de localhost:4200
app.use(cors({
  origin: 'http://localhost'
}));

// Configurer la connexion à la base de données PostgreSQL en utilisant dotenv
const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

// Route pour récupérer toutes les données de la table "restauration"
app.get('/restauration', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM restauration');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erreur lors de la récupération des données');
  }
});

// Route de test
app.get('/', (req, res) => {
  res.send('Backend Express.js connecté à PostgreSQL');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

