const express = require('express')
const Countrie = require('../../Schemas/Countries')

const router = express.Router()
const axios = require('axios')

router.get('/', async (req, res) => {
    try {
        let response = await Countrie.find({})
        res.json(response)
    } catch (error) {
        res.status(404).json(error)
    }
})

router.get('/getAllCountriesData', async (req, res) => {
    const allCountriesRequest = await axios.get('https://restcountries.com/v3/all').then(e => e.data).catch(e => console.log(e))
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

    try {
        const theResponse = await response.map(async (e) => {
            let newCountry = new Countrie(e)
            await newCountry.save().then(e => e).catch(e => console.log({error: e.message}))
        })
        res.send(theResponse)
    } catch (error) {
        console.log(error)
        res.send({msg:'error'})
    }
})
module.exports = router


