const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://GChivas:smitty5smitty5@cluster0-e2mbo.mongodb.net/advanced-express-practice?retryWrites=true', {useNewUrlParser: true})
.then(()=>console.log("Mongodb connected..."))

const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(userRoutes);


const PORT = process.env.PORT || 3000

app.listen(PORT, (err)=>{
    if(err){
        console.log("Nothing here, kid", err)
    };
    console.log("Server running on port 3000...")
})


//NOTE to self: CRUD API: Create, Read, Update and Delete