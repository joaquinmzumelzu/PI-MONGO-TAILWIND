require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = express()
const router = require('./Routes/index.js')
app.use(cors())
app.use(express.json())
app.use('/', router)

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`))


