import express from "express";
import cors from "cors";
import bodyParser, { json, urlencoded} from "body-parser";
import http from "http";
import fs from "fs";
import {Book, Book_Short} from "./book_properties";
import { isBlockScopedBindingElement } from "tslint";

let app
const importedFile = fs.readFileSync("src/Input/books.json")
const myJSON: Book_Short[] = JSON.parse(importedFile.toString())

let myMap = new Map()
myJSON.forEach((book: Book_Short) => myMap.set(book.id,<Book_Short> book))

console.log(myJSON)
function createserver() {
    app = express()
    app.use(cors())
    app.use(json())
    app.use(urlencoded({extended: false}))

    http.createServer(app).listen(3000, () =>{
        console.log("Running server on port 3000")
    })

    app.get("/api/library/book/:id/info", (req, res) => {
        const id = req.params["id"]
        let tempid = parseInt(id)
        let book = myMap.get(tempid)
        console.log(tempid)
        
        if (myMap.has(tempid)) {
            let tempbookshort: Book_Short = {
                id: book.id,
                name: book.name,
                author: book.author,
                genre: book.genre
            }
            res.json(tempbookshort)
        } else {
            res.json({ id: "Error: NO book found on this id"})
        }
    })
    app.post("/api/library/book/:id/info", (req, res) => {
        const id = req.params["id"]
        let tempid = parseInt(id)
        let book = myMap.get(tempid)
        console.log(tempid)
        if (myMap.has(tempid)) {
            res.json(book)
        } else {
            res.json({ id: "Error: NO book found on this id"})
        }
    })
    //app.post
}
createserver()




