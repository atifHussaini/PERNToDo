const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db")

//middleware
app.use(cors());
app.use(express.json());

//Routes

//create a todo

app.post("/todos", async(req,res) => {
    try {
        const {description} = req.body;
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1)", [description]);

        res.json(newTodo)
    } catch (err) {
        console.log(err)
    }
})

//get all todo

//get a todo

//update a todo



app.listen(5100, () => {
    console.log("server has started on port 5100")
});