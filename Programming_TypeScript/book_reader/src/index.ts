import express from "express";
import cors from "cors";
import bodyParser, { json, urlencoded} from "body-parser";
import http from "http";
import fs from "fs";
import {Book, Book_Short} from "./book_properties";

/** Reading from JSON file and mapping the JSON*/
let app = express()
const myJSON: Book[] = JSON.parse(fs.readFileSync(("src/Input/books.json")).toString())
let myMap = new Map()
myJSON.forEach((book: Book_Short) => myMap.set(book.id,<Book_Short> book))
console.log(myJSON)

/**
 * This function reads JSON file and creates a map from it
 * @returns the updated map for futher use
 */
function updateMap() {
    const myJSON: Book[] = JSON.parse(fs.readFileSync(("src/Input/books.json")).toString())
    let myMap = new Map()
    myJSON.forEach((book: Book_Short) => myMap.set(book.id,<Book_Short> book))
    return myMap
}

/**
 *  Creates server/localhost on port 3000 and have methods which will be used for API
 */
function createserver() {
    app.use(cors())
    app.use(json())
    app.use(urlencoded({extended: false}))

    http.createServer(app).listen(3000, () =>{
        console.log("Running server on port 3000")
    })

    /** According to the ID in URL, it gets you the the short info of that book with that ID*/
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

    /** According to the ID in URL, it gets you the the full info of that book with that ID*/
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

    /**After entering the parameter "name" = anyting, can search in the array of books by name */
    app.post("/api/library/book/find/name", (req, res) => {
        let searchingterm = req.body["name"]
        var result_array: Book[] = []
        for(let i = 0; i < myJSON.length; i++){
            if(myJSON[i].name.toLowerCase().includes(searchingterm.toLowerCase())){
                result_array.push(myJSON[i])
            }
        }
        console.log(result_array)
        if (result_array.length > 0){
            res.json(result_array)
        } else {
            res.json({ message: "Your search did not match any book."})
        }
    })
    
    /**After entering the parameter "name" = anyting, can search in the array of books by author*/
    app.post("/api/library/book/find/author", (req, res) => {
        let searchingterm = req.body["name"]
        var result_array: Book[] = []
        for(let i = 0; i < myJSON.length; i++){
            if(myJSON[i].author.toString().toLowerCase().includes(searchingterm.toLowerCase())){
                result_array.push(myJSON[i])
            }
        }
        console.log(result_array)
        if (result_array.length > 0){
            res.json(result_array)
        } else {
            res.json({ message: "Your search did not match any book."})
        }
    })

    /**This method can add json object into the array of json objects (the book properties) */
    app.put("/api/library/book/add", (req, res) => {
        let tempid = myJSON.length+1;
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
        updateMap();
        res.json({ message: "The following book was successfully added!", id: myJSON[myJSON.length - 1]})
    })

    /**This method deletes the element from array of books by the ID in URL if it exists */
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
/** Starts Server and enables its methods */
createserver()