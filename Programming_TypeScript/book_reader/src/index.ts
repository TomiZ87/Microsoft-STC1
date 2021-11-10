import express from "express";
import cors from "cors";
import bodyParser, { json, urlencoded} from "body-parser";
import http from "http";
import fs from "fs";
import {Book} from "./book_properties";

let app

function createserver() {
    app = express()
    app.use(cors())
    app.use(json())
    app.use(urlencoded({extended: false}))

    http.createServer(app).listen(3000, () =>{
        console.log("Running server on port 3000")
    })

    app.get("/api/library/book/:id/info", (req, res) => {
        const importedFile = fs.readFileSync("src/Input/books.json")
        const myJSON: Book[] = JSON.parse(importedFile.toString())
        res.json({myJSON})
    })
}
createserver()




