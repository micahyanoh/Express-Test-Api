import express from 'express';
import bordyParser from 'body-parser';

import usersRoutes from './routes/users.js'

const app = express();
const PORT = 5000;

app.use(bordyParser.json());

app.use('/users',usersRoutes);


app.listen(PORT, () => console.log(`Server Running on http://localhost:${PORT}`))
