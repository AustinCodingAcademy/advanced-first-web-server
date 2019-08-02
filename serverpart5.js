const express = require('express');
const bodyParser = require('body-parser');
const commentRoutes = require('./routes/comments');
const userRoutes = require('./routes/users');
const productRoutes = require('./routes/products');
const vehicleRoutes = require('./routes/vehicles');
const mongoose = require('mongoose');

//mongoose.connect('mongodb+srv://GChivas:smitty5smitty5@cluster0-e2mbo.mongodb.net/advanced-express-practice?retryWrites=true', {useNewUrlParser: true})
//.then(console.log("Mongodb connected..."))

mongoose.connect('mongodb://GChivas:smitty5smitty5@cluster0-shard-00-00-e2mbo.mongodb.net:27017,cluster0-shard-00-01-e2mbo.mongodb.net:27017,cluster0-shard-00-02-e2mbo.mongodb.net:27017/advanced-express-practice?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true', {useNewUrlParser: true})
.then(console.log("Mongodb connected..."))
.catch(err=>console.log(err))

const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(commentRoutes,userRoutes, productRoutes, vehicleRoutes);


const PORT = process.env.PORT || 3000

app.listen(PORT, (err)=>{
    if(err){
        console.log("Nothing here, kid", err)
    };
    console.log("Server running on port 3000...")
})


//NOTE to self: CRUD API: Create, Read, Update and Delete