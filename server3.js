const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://GChivas:smitty5smitty5@cluster0-e2mbo.mongodb.net/advanced-express-practice?retryWrites=true', {useNewUrlParser: true})

const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(userRoutes);

let userSchema = new mongoose.Schema({
    name: String,
    occupation: String,
    weapon: String
});

let User = mongoose.model('User', userSchema);
 
let rick = new User(
    { 
        name: 'Rick Grimes',
        occupation:'Stuff n Thangs expert',
        weapon:'Python'
    }
);
rick.save()
.then(() => console.log('user saved'));







const PORT = process.env.PORT || 3000

app.listen(PORT, (err)=>{
    if(err){
        console.log("Nothing here, kid", err)
    };
    console.log("Server running on port 3000...")
})


//NOTE to self: CRUD API: Create, Read, Update and Delete