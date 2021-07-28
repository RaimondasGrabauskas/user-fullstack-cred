require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const PORT = 4000;

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());


app.listen(PORT, console.log(`server running on port ${PORT}`));
