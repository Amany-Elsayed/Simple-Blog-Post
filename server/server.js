const express = require('express')
const cors = require('cors')
const posts = require('./data/posts')

const app = express()
app.use(cors())

app.get("/posts", (req, res) => {
    res.json(posts)
})

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000')
})