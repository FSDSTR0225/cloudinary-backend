const express = require('express')
const cors = require('cors')
const multer  = require('multer')
const cloudinary = require('cloudinary').v2
const app = express()
const port = 3003

require('dotenv').config()

app.use(express.json());
app.use(cors())

const upload = multer({ storage: multer.memoryStorage() })

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/profile/edit', upload.any(), async (req, res) => {
    console.log("form received", req.body)
    console.log("files received", req.files)

    for (const file of req.files) {
        const base64 = file.buffer.toString('base64')
        const dataURI = `data:${file.mimetype};base64,${base64}`
        const result = await cloudinary.uploader.upload(dataURI);
    }

    res.send({"msg":"received"})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})