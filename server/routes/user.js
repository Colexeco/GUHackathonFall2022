
const express = require("express");
//router added to control requests
const userRoutes = express.Router();

//connect to db
const dbo = require("../db/conn");

//helps convert id from string to objectId
//const ObjectId = require("mongodb").ObjectId;


const User = require('../../models/User');


// User test
userRoutes.get('/test', (req, res) => res.send('user route testing!'));

//get all users
userRoutes.get('/', (req, res) =>{
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(404).json({noUsersFound : 'No users found.'}));
});

// userRoutes.route("/user").get(function (req, res) {
//     let db_connect = dbo.getDb("instagram");
//     db_connect
//         .collection("users")
//         .find({})
//         .toArray(function (err, result) {

//             if (err) throw err;
//             console.log("Got a list of users.");
//             res.json(result);
//         });
// });

// //get single user by id
// userRoutes.route("/user/:id").get(function (req, res) {
//     let db_connect = dbo.getDb();
//     let myquery = { _id: ObjectId(req.params.id) };
//     db_connect
//         .collection("user")
//         .findOne(myquery, function (err, result) {
//             if (err) throw err;
//             res.json(result);
//         });
// });

// //creating new user
// userRoutes.route("/user/add").post(function (req, response) {
//     let db_connect = dbo.getDb();
//     let myobj = {
//         name: req.body.name,
//         position: req.body.position,
//         level: req.body.level,

//     };
//     db_connect.collection("users").insertOne(myobj, function (err, res) {
//         if (err) throw err;
//         console.log("Created a user.")
//         response.json(res);
//     });
// });

// //update user by id
// userRoutes.route("/update/:id").post(function (req, response) {
//     let db_connect = dbo.getDb();
//     let myquery = {_id: ObjectId(req.params.id)};
//     let newvalues = {
//         $set: {
//             name : req.body.name,
//             position : req.body.position,
//             level : req.body.level,
//         },
//     };
//     db_connect  
//         .collection("users")
//         .updateOne(myquery, newvalues, function (err, res) {
//             if (err) throw err;
//             console.log("1 user updated");
//             response.json(res);
//         });
// });

// //delete user
// userRoutes.route("/:id").delete((req,response) => {
//     let db_connect = dbo.getDb();
//     let myquery = { _id: ObjectId(req.params.id)};
//     db_connect.collection("users").deleteOne(myquery, function (err, obj) {
//         if (err) throw err;
//         console.log("1 user deleted");
//         response.json(obj);
//     });
// });

module.exports = userRoutes;

