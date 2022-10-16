const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env"});
const port = process.env.PORT || 5000;//listen on port 5000
const Db = process.env.ATLAS_URI;
//const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());
app.use(require('./routes/user'));


const dbo = require("./db/conn");

//app.get('/', (req, res) => res.send('Hello world!'));

app.listen(port, () => {
    dbo.connectToServer(function (err) {
        if (err) console.error(err);
    })
    console.log(`server running on port: ${port}` );
});

