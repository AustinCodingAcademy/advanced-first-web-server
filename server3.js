const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');

const app = express();

app.use(bodyParser.json());
app.use(userRoutes);

const PORT = process.env.PORT || 8080

app.listen(PORT, (err)=>{
    if(err){
        console.log("Nothing here, kid", err)
    };
    console.log("Server running on port 8080...")
})


//NOTE to self: CRUD API: Create, Read, Update and Delete