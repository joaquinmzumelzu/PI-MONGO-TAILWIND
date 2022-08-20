const express = require('express')
const Countries = require('../../Schemas/Countries')

const router = express.Router()
const axios = require('axios')

router.get('/getAllCountriesData', async (req, res) => {
    try {
        let allCountriesRequest = await axios.get('https://restcountries.com/v3/all').then(e => e.data).catch(e => console.log(e))
        let response =  allCountriesRequest.map(e => {
            return {
                name: e.name.common,
                nameId: e.cca3,
                oficialName: e.name.official,
                flagImg: e.flags[0]? e.flags[0] : 'no flag',
                continent: e.continents[0]? e.continents[0] : 'no continent',
                // capitalCity: e.capital[0]? e.capital[0] : 'no capital',
                region: e.region,
                subRegion: e.subregion   ,
                area: e.area,
                population: e.population,
            }
        })
        let realResponse = await response.map (async (e) => {
            let newCountry = new Countries(e)
            await newCountry.save().then(e => e).catch(e => console.log(e))
        })
  
        return res.send({msg:response})
    } catch (error) {
        console.log({eror:error.message})
    }
})

router.get('/', async (req, res) => {
    try {
        
        res.send({msg:'ok2'})
    } catch (error) {
        console.log(error)
    }
})
module.exports = router


