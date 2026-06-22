import express from "express"
import connectdb  from "./db/db.js"
const app = express()

const port = 3000

app.get("/",(req, res)=>{
    res.send("Hello World!")
})
connectdb().then(()=>{
    app.listen(port,(req,res)=>{
    console.log(`Example app listening at http://localhost:${port}`)
})
})