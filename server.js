const express = require("express")
const mongoose =  require("mongoose")



//Configuration
require("dotenv").config()
const PORT = process.env.PORT
const app = express()
mongoose.connect(process.env.MONGO_URI,  {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => {console.log("Conected to mongoDB", process.env.MONGO_URI)
    })

//MIDDLEWARE
app.use(express.urlencoded({ extended: true}))
app.use(express.json())


//ROUTES
app.get("/", (req, res) => {
    res.send("Hello World")
})

//controllers
const booksController = require("./controllers/books_controllers")
app.use("/books", booksController)

//LISTEN
app.listen(PORT, () => {
    console.log("I am Awake")
})