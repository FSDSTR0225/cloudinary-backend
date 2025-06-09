const express = require('express')
const cors = require('cors')
const app = express()
const port = 3003

app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/profile/edit', (req, res) => {
    console.log("form received", req.body)
    res.send({"msg":"received"})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})