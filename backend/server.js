import express from 'express';
import cors from 'cors';
import { heroRoutes } from './Routes/hero.route.js';

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

  app.use(express.json());

app.get('/api', (req, res) => {
    res.json({
        message: "hihihih"
    })
})

app.use(heroRoutes);

app.listen(PORT, () => {
    console.log(`servers is on http://localhost:3001`);
})