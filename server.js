const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('./config/db.js');
const app = express();


app.use(cors());
app.use(express.json());


app.get('/api/health', (req, res) => {
  res.json({
    status: 'success',
    message: 'Welcome to the server , Its healthy'
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is up and running on https://localhost:${PORT}`);
});

