const mongoose = require('mongoose')

const password = 'fUAwA2iLQ4r3PoAz'
const connectionString = `mongodb+srv://gatingatito:${password}@pi-mongo.casksvq.mongodb.net/?retryWrites=true&w=majority`





mongoose.connect(connectionString)
.then(() => console.log('database on'))
.catch((err) => console.error(err))