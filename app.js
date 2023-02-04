const express = require('express')
const app = express()
const port = 3000
let todos= ["Hello World"]

app.get('/todos',(req,res) => {
    res.send(todos);
})

app.post("/todos",(req,res) => {
    const name = req.body.name;
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// hello
// hello again
