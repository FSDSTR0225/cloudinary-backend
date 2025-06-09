const express = require('express')
const cors = require('cors')
const multer  = require('multer')
const app = express()
const port = 3003

app.use(express.json());
app.use(cors())

const upload = multer({ dest: 'uploads/' })

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/profile/edit', upload.single('avatar'), (req, res) => {
    console.log("form received", req.body)
    res.send({"msg":"received"})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})