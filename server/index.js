const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db")

//middleware
app.use(cors());
app.use(express.json());

//Routes

//create a todo

//get all todo

//get a todo

//update a todo



app.listen(5100, () => {
    console.log("server has started on port 5100")
});