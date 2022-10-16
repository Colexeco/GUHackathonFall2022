const express = require("express");
const app = express();
const cors = require("cors");
//const { default: mongoose } = require("mongoose");
require("dotenv").config({ path: "./config.env"});
const port = process.env.PORT || 5000;//listen on port 5000
const Db = process.env.ATLAS_URI;
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());
// app.use(require('"./routes/user"'));


const connectDB = require("./db/conn");

connectDB();

app.get('/', (req, res) => res.send('Hello world!'));

app.listen(port, () => {
    console.log(`server running on port: ${port}` );
});

