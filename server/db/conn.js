const { MongoClient } = require("mongodb");
const Db = process.env.ATLAS_URI;
//const mongoose = require('mongoose');
const client = new MongoClient(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

var _db;
module.exports = {
connectToServer : function (callback)  {
    client.connect(function (err, db) {
        if (db)
        {
            _db = db.db("instagram");
            console.log("Connected to MongoDB");
        }
        return callback(err);

    });


 },
  getDb: function () {
    return _db;

 },
};



   
