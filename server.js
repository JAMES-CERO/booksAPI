const express = require("express")
const mongoose =  require("mongoose")
const cors = require("cors")


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
app.use(cors())

//ROUTES
app.get("/", (req, res) => {
    res.send("Hello World")
})

app.get('/products/:id', cors(), function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for all origins!'})
  })

//controllers
const booksController = require("./controllers/books_controllers")
app.use("/books", booksController)

//LISTEN
app.listen(PORT, () => {
    console.log("I am Awake")
})