const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 'https://countries-mongoose-tailwind.herokuapp.com/'

app.use(cors())
app.use(express.json())

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

