import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/ping', (req, res) => {
    res.json({ data: "Megumine" });
});


export default app;
