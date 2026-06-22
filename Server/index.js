const http = require("http")

const HOST = "localhost"
const PORT = 8000

const server = http.createServer((req,res)=>{
    res.end("<h1>Hello World</h1>")
})

server.listen(PORT, HOST, ()=>{
    console.log(`Server is running at http://${HOST}:${PORT}`)
})