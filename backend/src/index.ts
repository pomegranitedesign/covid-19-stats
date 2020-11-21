import express from 'express';
import {} from '@types/express';

const app = express();
const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {});

app.listen(PORT, () => console.log(`The server is running on port: ${PORT}`));
