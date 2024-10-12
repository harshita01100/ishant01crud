const express = require('express') ; 
const cors = require('cors') ; 
const mongoose = require('mongoose')
const Product = require("./models/product.model.js")
const productRoute = require("./routes/product.route.js")

const app = express() ;

//middlewares
app.use(cors()) ;
app.use(express.json()) ;

//routes
app.use("/api/products" , productRoute);

app.get("/", (req, res) => {
    res.send("Hello from Node API Server Updated") ;
})


mongoose.connect("mongodb+srv://thakurkannu810:kUpHsZ2r5WwxQSYZ@cluster0.kul7l.mongodb.net/CRUD?retryWrites=true&w=majority&appName=Cluster0")
.then( () => {
    console.log("Connected to database!") ;
    app.listen(8000, () => {
        console.log("server is running on port 8000") ;
  });
})
.catch(() => {
     console.log("Connection Failed!") ;
})




