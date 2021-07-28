require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const PORT = 4000;

mongoose
  .connect(process.env.MONGO_CONNECT_STIRNG, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log('Conneced to Mongoosee');
  })
  .catch((err) => console.error(err.message))

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());



app.get('/', (req, res) => {
    res.status(200).json(`Serveris veikia ant porto ${PORT}`);
});

app.listen(PORT, console.log(`server running on port ${PORT}`));
