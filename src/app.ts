import express from 'express';
import cors from 'cors';
import userRoutes from "./routes/user.routes"

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/ping', (req, res) => {
    res.json({ data: "Megumine" });
});

app.use('/api/users', userRoutes);


export default app;
