import express from "express";
import cors from "cors";
import bodyParser, { json, urlencoded} from "body-parser";
import http from "http";
import fs from "fs";
import {Book, Book_Short} from "./book_properties";

let app = express()
const myJSON: Book[] = JSON.parse(fs.readFileSync(("src/Input/books.json")).toString())

let myMap = new Map()
myJSON.forEach((book: Book_Short) => myMap.set(book.id,<Book_Short> book))

console.log(myJSON)

function updateMap() {
    const myJSON: Book[] = JSON.parse(fs.readFileSync(("src/Input/books.json")).toString())
    let myMap = new Map()
    myJSON.forEach((book: Book_Short) => myMap.set(book.id,<Book_Short> book))
    return myMap
}

function createserver() {
    app.use(cors())
    app.use(json())
    app.use(urlencoded({extended: false}))

    http.createServer(app).listen(3000, () =>{
        console.log("Running server on port 3000")
    })

    app.get("/api/library/book/:id/info", (req, res) => {
        updateMap()
        const id = req.params["id"]
        let tempid = parseInt(id)
        if (myMap.has(tempid)) {
            let book = myMap.get(tempid)
            console.log(tempid)
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
        updateMap()
        const id = req.params["id"]
        let tempid = parseInt(id)
        if (myMap.has(tempid)) {
            let book = myMap.get(tempid)
            console.log(tempid)
            res.json(book)
        } else {
            res.json({ id: "Error: NO book found on this id"})
        }
    })

    app.post("/api/library/book/find/name", (req, res) => {
        updateMap()
        let searchingterm = req.body["name"]
        var result_array: Book[] = []
        for(let i = 0; i < myJSON.length; i++){
            if(myJSON[i].name.toLowerCase().includes(searchingterm.toLowerCase())){
                result_array.push(myJSON[i])
            }
        }
        console.log(result_array)
        res.json(result_array)
    })
    
    app.post("/api/library/book/find/author", (req, res) => {
        updateMap()
        let searchingterm = req.body["name"]
        var result_array: Book[] = []
        for(let i = 0; i < myJSON.length; i++){
            if(myJSON[i].author.toString().toLowerCase().includes(searchingterm.toLowerCase())){
                result_array.push(myJSON[i])
            }
        }
        console.log(result_array)
        res.json(result_array)
    })

    app.put("/api/library/book/add", (req, res) => {
        updateMap();
        let tempid = myJSON.length;
        myJSON.push(
        {
            id: tempid,
            name: req.body["name"],
            author: req.body["author"],
            genre: req.body["genre"],
            published: req.body["published"],
            publisher: req.body["publisher"],
            origin_country: req.body["origin_country"],
            pages: req.body["pages"]
        }
        )
        fs.writeFileSync("src/Input/books.json", (JSON.stringify(myJSON, null, 2)));
        res.json({ message: "The following book was successfully added!", id: myJSON[myJSON.length - 1]})
    })
    app.delete("/api/library/book/:id/delete", (req, res) => {
        updateMap()
        const id = req.params["id"]
        let tempid = parseInt(id)
        if (myMap.has(tempid)) {
            let myJSON2 = myJSON.filter((book: Book) => book.id !== tempid);
            fs.writeFileSync("src/Input/books.json", (JSON.stringify(myJSON2, null, 2)));
            res.json({ message: "The following book was successfully deleted!", id: myJSON.filter((book: Book) => book.id === tempid)})
            updateMap()
        } else {
            res.json({ id: "Error: No book found on this id"})
            
        }
    })
}
createserver()