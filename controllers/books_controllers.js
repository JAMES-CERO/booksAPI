const express = require("express")
const books = express.Router()
const Book = require("../models/books.js")

//Index

books.get('/', (req, res) => {
    Book.find()

        .then((foundBooks) => {
            // console.log(foundBooks)
            res.json(foundBooks)

        })
        .catch(err => {
            res.send("Index erro", err)
        }
        )
})

//Post or Create

books.post("/", (req, res) => {
    Book.create(req.body)
        .then(() => {
            res.redirect("/books")
        })
        .catch(res.status(444).json({
            message: "create error"
        }))
})

//Show one

books.get('/:id', (req, res) => {
    Book.findOne({ name: req.params.name})
    
        .then(foundBook=> {
               res.json(foundBook)
        })
       .catch(err => {
        res.semd("Show error", err)
    }) 
 })

//Update

books.put('/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body)
        .then(() => {
            res.redirect(`/books/${req.params.id}`)
        })
        .catch(res.status(503).json({
            message: "update error"
        }))
})

//DELETE

books.get("/:id", (req, res) => {
    Book.findByIdAndDelete(req.params.id)
        .then(() => {
            res.send('the delete was successful')
        })
        .catch(res.status(418).json({
            message: ' Teapot error'
        }))
})


module.exports = books
