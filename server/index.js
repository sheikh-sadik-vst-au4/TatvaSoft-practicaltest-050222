import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import Router from './routes.js';
import database from './database.js';
const app = express();
const PORT = 5000;

app.use('/', Router);
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
database.connect();

app.listen(PORT, () => {
    console.log(`app listen to ${PORT}`);
})