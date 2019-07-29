const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');
const mongoose = require('mongoose');
let User = require('./models/UserModel')

mongoose.connect('mongodb+srv://GChivas:smitty5smitty5@cluster0-e2mbo.mongodb.net/advanced-express-practice?retryWrites=true', {useNewUrlParser: true})

const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(userRoutes);

//instantiate a new document: 
/*let rick = new User(
    { 
        name: 'Rick Grimes',
        occupation:'Stuff n Thangs expert',
        weapon:'Python'
    }
);
rick.save()
.then(() => console.log('user saved'));*/

//find method:
User.find({name:"Daryl Dixon"},function(err,users){
    if(err)
      return console.log(err);
      console.log(users)  
})

//find by id and update:
User.findByIdAndUpdate("5d3e772356b25f44ab87a6c7",{weapon:"Lucille"}, function(err,result){
    if(err){
        console.log(err)
    }
    console.log("Result is: " + result)
});


const PORT = process.env.PORT || 3000

app.listen(PORT, (err)=>{
    if(err){
        console.log("Nothing here, kid", err)
    };
    console.log("Server running on port 3000...")
})


//NOTE to self: CRUD API: Create, Read, Update and Delete