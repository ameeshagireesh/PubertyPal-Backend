const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(routes);

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', (error) =>console.error(error));
db.once('open', ()=> console.log('Database Connected'));

app.listen(process.env.PORT, ()=>{
    console.log('The API is running...')
});