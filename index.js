const express = require('express')

const PORT = process.env.NODE_ENV || 3001;

const app = express()
app.listen(PORT,() => {
    console.log(`listening on http://localhost:${PORT}`)
})