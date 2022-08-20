const mongoose = require('mongoose')
const {Schema} = mongoose;

const CountriesSchema = new Schema({
name: {type: String, required :false},
nameId: {type: String, required :false},
oficialName: {type: String, required :false},
nativeName: {type: String, required :false},
flagImg: {type: String, required :false},
continent: {type: String, required :false},
capitalCity: {type: String, required :false},
subRegion: {type: String, required :false},
area: {type: String, required :false},
population: {type: Number, required :false},
})

const Countries = mongoose.model('Countries', CountriesSchema )
module.exports = Countries
