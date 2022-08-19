const express = require('express')
const Countries = require('../../Schemas/Countries')

const router = express.Router()
const axios = require('axios')

router.get('/getAllCountriesData', async (req, res) => {
    try {
        let allCountriesRequest = await axios.get('https://restcountries.eu/rest/v3/all').then(e => e.data).catch(e => console.error(e))
        allCountriesRequest?.map(e => {
           const response =  await Countries.create({
                name: e.name.common,
                nameId: e.cca3,
                oficialName: e.name.official,
                flagImg: e.flags[0],
                continents: e.region[0],
                capitalCity: e.capital[0],
                region: e.region,
                subRegion: e.subregion[0],
                area: e.area,
                population: e.population,
            }).then( e => console.log(response)).catch(e => console.error(e))
        }) 
        res.send({msg:'ok'})
    } catch (error) {
        console.log(error)
    }
})

module.exports = router


