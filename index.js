const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');
const app = express()

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use('/api/products',productRoute); 



mongoose
.connect(
  "mongodb+srv://akuribireanna:Q0fkxpNBm77MyWZ3@cluster0.vzl4qex.mongodb.net/Semester_Project?retryWrites=true&w=majority&appName=Cluster0"
)
.then( () => { 
  console.log("Connected to the Database.") ;
  app.listen(3000, () => {
    console.log("Server is running on port 3000"); 
    })
})
.catch(() => {
  console.log("You are not connected to the Database.")
})





