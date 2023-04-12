const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://duser:VwjqB54S4RoQvQDw@cluster1.kfwq5so.mongodb.net/test')
const db = mongoose.connection;

db.on('error',console.error.bind(console,"Error connecting to MongoDB"))

db.once('open',function(){
    console.log("Connected to Database :: MongoDB")
})


module.exports = db