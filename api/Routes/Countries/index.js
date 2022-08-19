const express = require('express')
const Countries = require('../../Schemas/Countries')

const router = express.Router()
const axios = require('axios')

router.get('/getAllCountriesData', async (req, res) => {
    try {
        let allCountriesRequest = await axios.get('https://restcountries.eu/rest/v3/all').then(e => e.data)
        allCountriesRequest?.map(e => {
            Countries.create({
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
            })
        }) 
        res.send({msg:'ok'})
    } catch (error) {
        console.log(error)
    }
})


