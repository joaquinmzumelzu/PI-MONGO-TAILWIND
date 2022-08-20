const express = require('express')
const cors = require('cors')

const app = express()
const router = require('./Routes/index.js')
const PORT = 3000

app.use(cors())
app.use(express.json())
app.use('/', router)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))


