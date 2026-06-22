const express = require("express")
const fs = require("fs")
const User = require("./MOCK_DATA.json")
const app = express()

const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get("/api/user", (req, res) => {
    return res.json(User)
})

app.get("/user", (req, res) => {
    const html = `<ul>
${User.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>`
    return res.send(html)
})

app.get("/user/:id", (req, res) => {
    const id = Number(req.params.id)
    const user = User.find((user) => user.id === id)
    return res.json(user)
})

app.route("/api/user/:id")
    .get((req, res) => {
        const id = Number(req.params.id)
        const user = User.find((user) => user.id === id)
        return res.json(user)
    })
    .patch((req, res) => {
        const id = Number(req.params.id)
        const body = req.body
        const user = User.find((user) => user.id === id)
        if (!user) return res.status(404).json({ status: "error", message: "User not found" })
        Object.assign(user, body)
        fs.writeFileSync("./MOCK_DATA.json", JSON.stringify(User))
        return res.json({ status: "success", user })
    })
    .delete((req, res) => {
        const id = Number(req.params.id)
        const index = User.findIndex((user) => user.id === id)
        if (index === -1) return res.status(404).json({ status: "error", message: "User not found" })
        User.splice(index, 1)
        fs.writeFileSync("./MOCK_DATA.json", JSON.stringify(User))
        return res.json({ status: "success", id })
    })

app.post("/api/user", (req, res) => {
    const body = req.body
    User.push({ id: User.length + 1, ...body })
    fs.writeFileSync("./MOCK_DATA.json", JSON.stringify(User))
    return res.json({ status: "success", id: User.length })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
