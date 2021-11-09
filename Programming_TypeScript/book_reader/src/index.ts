import express from "express"
import cors from "cors"
import bodyParser, { json, urlencoded} from "body-parser"
import http from "http"
import fs from "fs"

const importedFile = fs.readFileSync("books.json")
const myJSON = JSON.parse(importedFile.toString())

console.log(myJSON)
