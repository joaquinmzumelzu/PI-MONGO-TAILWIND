require('dotenv').config()
const mongoose = require('mongoose')
console.log(process.env.MONGODB_URI)


mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true,})
.then(() => console.log('database on'))
.catch((err) => console.error(err))

module.exports = mongoose;

