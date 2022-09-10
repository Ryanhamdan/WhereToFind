// JavaScript source code
var express = require('express');
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var User = mongoose.model('User', { name: String, age: Number });

app.get('', (req, res) => {
    var Ryan = new User({ name: "Ryan", age: 13 });
    Ryan.save().then(user => {
        res.send('a new user with name ${user.name} is created');
    })
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

const express = require('express')
const mangoose = require('mongoose')
const routes = require('./routes/score')
const cors = require('cors');

const app = express();
//use cors 
app.use(cors())
const port = 3000;
const dbURL = 'mongodb+srv://RyanHamdan:<Sunyongclong257>@cluster0.l1szsyo.mongodb.net/?retryWrites=true&w=majority'

//connecting to the mongo cloud db through the mongoose package 
mangoose.connect(dbURL).then(() => {
    console.log("connected to the cloud")
}).catch((error) => { console.log(error) })

//in order to let express parse JSON 
app.use(express.json())
//routes 
app.use('/api', routes)

//starting the server at the port of your choice 
app.listen(process.env.PORT || port, () => {
    console.log("app is listening at port", port)
})
const ScoresSchema = new mongoose.Schema({
    name: { type: String, required: true },
    password: { type: String, required: true }
})
module.exports = mongoose.model('Scores', ScoresSchema)




