const express = require('express')
const cors = require('cors')
require('dotenv').config()
const app = express()
const port = process.env.PORT

app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
    res.send(`Hello World! ${process.env.SOME_RANDOM_KEY}`)
})

app.post('/profile/edit', (req, res) => {
    console.log("form received", req.body)
    res.send({ "msg": "received" })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})