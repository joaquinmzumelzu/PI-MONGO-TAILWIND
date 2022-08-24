const express = require('express')
const Countrie = require('../../Schemas/Countries')

const router = express.Router()
const axios = require('axios')


// router.get('/', async (req, res) => {
//     const {search} = req.query || '';
//     const {c} = req.query;
//     const {sort} = req.query;
//     const page = req.query.p;
//     const perPage = 20;

//     try {
//         let response = []; //we declare the response array
//         if(!search) response = await Countrie.find({}) //if there is no search, we get all the countries
//         else response = await Countrie.find({name: {$regex: search, $options: 'i'}}) //if there is a search, we get the countries that match the search
        
//         // if there is a continent query we are going to filter the response array.
//         if(c){
//             //if there is only 1 continent, we are going to filter the response array by continent 
//             if(typeof c === 'string'){
//                 response = response.filter(e => e.continent === c)
//             }
//             //if there are more than 1 continent, we are going to filter the response array by continent
//             else{
//                 response = response.filter(e => c.includes(e.continent))
//             }
//         }
//         // if there is a sort query we are going to sort the response array properly.
//         if(sort){
//             if(sort === 'ZA') response = response.sort((a, b) => b.name.localeCompare(a.name))
//             if(sort === 'AZ') response = response.sort((a, b) => a.name.localeCompare(b.name))
//             if(sort === 'populationASC') response = response.sort((a, b) => a.population - b.population)
//             if(sort === 'populationDESC') response = response.sort((a, b) => b.population - a.population)
//         }
//         // if there is a page query (p) we are going to paginate the response array.  
//         if(page){
//             //this pagination works propertly if the page start with 1, example --> response.slice(1 * 20  - 20, 1 * 20) --> (0, 20)
//             response = response.slice((page * perPage) - perPage, page * perPage)
//             // if page query exist we are going to respond with the response array and the total of pages.
//             return res.json({
//                  data:response,
//                  pagination:{
//                     page: page,
//                     countriesPerPage: perPage,
//                     total: response.length,
//                     left: 250 - (page * perPage) > 0 ? 250 - (page * perPage) : 0,
//                  }
//                 })
//         }
//         // if there is no page query (p) we are going to respond with the response array.
//         return res.json(response)


//     } catch (error) {
//         console.log(error)
//         res.status(404).json({error: error.message})
//     }
// })


// ---------------------------------------------------------------------------------------------------------------------
// EN ESTE RUTA ESTAMOS CONSULTANDO LA API DE COUNTRIES Y CREANDOLAS EN LA BASE DE DATOS.

// router.get('/getAllCountriesData', async (req, res) => {
//     const allCountriesRequest = await axios.get('https://restcountries.com/v3/all').then(e => e.data).catch(e => console.log(e))
//     let response =  allCountriesRequest.map(e => {
//                     return {
//                         name: e.name.common,
//                         nameId: e.cca3,
//                         oficialName: e.name.official,
//                         flagImg: e.flags[0]? e.flags[0] : 'no flag',
//                         continent: e.continents[0]? e.continents[0].toLowerCase() : 'no continent',
//                         // capitalCity: e.capital[0]? e.capital[0] : 'no capital',
//                         region: e.region,
//                         subRegion: e.subregion? e.subregion : 'no subregion',
//                         area: e.area,
//                         population: e.population,
//                     }
//                 })

//     try {
//         const theResponse = await response.map(async (e) => {
//             let newCountry = new Countrie(e)
//             await newCountry.save().then(e => e).catch(e => console.log({error: e.message}))
//         })
//         res.send(theResponse)
//     } catch (error) {
    //         console.log(error)
    //         res.send({msg:'error'})
    //     }
    // })
    
    //---------------------------------------------------------------------------------------------------------------------
    // router.get('/oldQuery', async (req, res) => {
    //     const {sort} = req.query ; // sort
    //     const {c} = req.query; // ---> continents
    //     const {search} = req.query; // search
    //     const page = req.query.p || 0;
    //     const perPage = 20
    //     // --> pagination
      
    //     //----------------------------------------------------------------------------------------------------------------------
    //     // if theres no querys, return the data of all the countries without sort or pagination
    //     if(!c && !sort && !page){
    //         try {
    //             let response = await Countrie.find({})
    //             return res.json(response)
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
        
    //     //----------------------------------------------------------------------------------------------------------------------
    //     // In here we are going to sort and paginate the data, no matter if there is a query of continent or not.
    //     if(!c){
    //         // if there isn't a query continent, we are going to sort and paginate the data
    //         try {
    //             if(!sort) response = await Countrie.find({}).sort({name: 'asc'}).skip(page * perPage).limit(perPage)
    //             if(sort === 'nameASC') response = await Countrie.find({}).sort({name: 'desc'}).skip(page * perPage).limit(perPage)
    //             if(sort === 'populationDESC') response = await Countrie.find({}).sort({population: 'desc'}).skip(page * perPage).limit(perPage)
    //             if(sort === 'populationASC') response = await Countrie.find({}).sort({population: 'asc'}).skip(page * perPage).limit(perPage)
    //             return res.json(response)
    //         } catch (error) {
    //             return res.status(404).json(error)
    //         }
    //         //-----------------------------------------------------
    //     }
    //     else{
    //         // if there is a query continent, we are going to return all the countries that match with the query, sorted and paginated.
    //         try {
    //             console.log(c)
    //             // if the is 1 continent on the search, we are going to return all the countries that match with the query, sorted and paginated.
    //             if(typeof c === 'string'){
    //                 if(!sort) response = await Countrie.find({continent: c.toLowerCase()}).sort({name: 'asc'}).skip(page * perPage).limit(perPage)
    //                 if(sort === 'nameASC') response = await Countrie.find({continent: c.toLowerCase()}).sort({name: 'desc'}).skip(page * perPage).limit(perPage)
    //                 if(sort === 'populationDESC') response = await Countrie.find({continent: c.toLowerCase()}).sort({population: 'desc'}).skip(page * perPage).limit(perPage)
    //                 if(sort === 'populationASC') response = await Countrie.find({continent: c.toLowerCase()}).sort({population: 'asc'}).skip(page * perPage).limit(perPage)
    //             }
    //             // if there is more than 1 continent on the search, we are going to return all the countries that match with the query, sorted and paginated.
    //             else{
    //                 if(!sort) response = await Countrie.find({continent: {$in: c.map(e => e.toLowerCase())}}).sort({name: 'asc'}).skip(page * perPage).limit(perPage)
    //                 if(sort === 'nameASC') response = await Countrie.find({continent: {$in: c.map(e => e.toLowerCase())}}).sort({name: 'desc'}).skip(page * perPage).limit(perPage)
    //                 if(sort === 'populationDESC') response = await Countrie.find({continent: {$in: c.map(e => e.toLowerCase())}}).sort({population: 'desc'}).skip(page * perPage).limit(perPage)
    //                 if(sort === 'populationASC') response = await Countrie.find({continent: {$in: c.map(e => e.toLowerCase())}}).sort({population: 'asc'}).skip(page * perPage).limit(perPage)
    //             }
    //             return res.json(response)
    //         } catch (error) {
    //             return res.status(404).json(error)
    //         }
    //     }
    
    
    // })

    //--------------------------------------------------------------------------------------------------------------------- 
    router.get('/', async (req, res) => {
        const {c} = req.query // c  ---> continents
        const {sort} = req.query ; // sort --> sort by name AZ or ZA --> sort by population ASC or DESC 
        const {search} = req.query; // search --> it filter the data by the name of the country
        const page = req.query.p || 0;
        const perPage = 20
        

        //*******************************************************************************
        //in here we declare the array of continents that we are going to use in the mongoose find query
        let cArray = []
        function getContinents(c){
            //if there is only 1 continent on the query, we are going to push it on the array
            if(typeof c === 'string') cArray.push(c.toLowerCase())
            // we are going to check if there is no query continent, if there is no query continent, we are going return nothing, so the array will still empty
            else if(typeof c === 'undefined') return
            //if there is more than 1 continent on the query, we are going to push them on the array
            else {
                c.forEach(e => {
                    cArray.push(e.toLowerCase())
                } )
            }
        }
        
        getContinents(c)
        //*******************************************************************************

        // So, first we are going to check if there is a query continent 
        if(!c){
            //if there is a query continent, we are going to return all the countries that match with the query, sorted and paginated.
            try {
                // first of all we declare a the response variable and we initialize it with null
                let response = null
                //if there is no sort query || if sort query is nameDESC, we are going to return the data sorted and paginated 
                if(!sort || sort == 'nameDESC'){
                    // if there is no search query, we are going to return the data sorted and paginated
                    if(!search) response = await Countrie.find({}).sort({name: 'asc'}).skip(page * perPage).limit(perPage)
                    // and if there are a search query, we are going to return the data that match with the search query, sorted and paginated
                    else response = await Countrie.find({name: {$regex: search, $options: 'i'}}).sort({name: 'asc'}).skip(page * perPage).limit(perPage)
                }  
                // the rest of the code bellow is the same as the previous one, but it response with the type of sort
                 
                if(sort === 'nameASC'){
                    if(!search) response = await Countrie.find({}).sort({name: 'desc'}).skip(page * perPage).limit(perPage)
                    else response = await Countrie.find({name: {$regex: search, $options: 'i'}}).sort({name: 'desc'}).skip(page * perPage).limit(perPage)
                } 

                if(sort === 'populationDESC'){
                    if(!search) response = await Countrie.find({}).sort({population: 'desc'}).skip(page * perPage).limit(perPage)
                    else response = await Countrie.find({name: {$regex: search, $options: 'i'}}).sort({population: 'desc'}).skip(page * perPage).limit(perPage)
                } 

                if(sort === 'populationASC'){
                    if(!search) response = await Countrie.find({}).sort({population: 'asc'}).skip(page * perPage).limit(perPage)
                    else response = await Countrie.find({name: {$regex: search, $options: 'i'}}).sort({population: 'asc'}).skip(page * perPage).limit(perPage)
                }
                
                // when the filtering and query is done, we are going to return the response
                return res.json(response)
            } catch (error) {
                console.log(error)
                return res.status(404).json({error: error.message})
            }
        }

        // in case there is a query continent, we are going to return all the countries that match with the search query, the continent query, sorted and paginated.
        else{
            try {
                // first of all we declare a the response variable and we initialize it with null
                let response = null
                //if there is no sort query || if sort query is nameDESC, we are going to return the data sorted and paginated
                if(!sort || sort === 'nameDESC'){
                    // as above, we are going to do almost the same thing, we are going to check if there is search query
                    // if there isn't a search query, we are going to return the data filtered by continent and sorted and paginated
                    if(!search) response = await Countrie.find({continent: {$in: cArray}}).sort({name: 'asc'}).skip(page * perPage).limit(perPage)
                    // if there is a search query, we are going to return the data filtered by continent and in search query, sorted and paginated
                    else response = await Countrie.find({continent: {$in: cArray}, name: {$regex: search, $options: 'i'}}).sort({name: 'asc'}).skip(page * perPage).limit(perPage)
                }  
                // the rest of the code bellow is the same as the previous one, but it response with the type of sort
                
                if(sort === 'nameASC'){
                    if(!search) response = await Countrie.find({continent: {$in: cArray}}).sort({name: 'desc'}).skip(page * perPage).limit(perPage)
                    else response = await Countrie.find({continent: {$in: cArray}, name: {$regex: search, $options: 'i'}}).sort({name: 'desc'}).skip(page * perPage).limit(perPage)
                }

                if(sort === 'populationDESC'){
                    if(!search) response = await Countrie.find({continent: {$in: cArray}}).sort({population: 'desc'}).skip(page * perPage).limit(perPage)
                    else response = await Countrie.find({continent: {$in: cArray}, name: {$regex: search, $options: 'i'}}).sort({population: 'desc'}).skip(page * perPage).limit(perPage)
                }

                if(sort === 'populationASC'){
                    if(!search) response = await Countrie.find({continent: {$in: cArray}}).sort({population: 'asc'}).skip(page * perPage).limit(perPage)
                    else response = await Countrie.find({continent: {$in: cArray}, name: {$regex: search, $options: 'i'}}).sort({population: 'asc'}).skip(page * perPage).limit(perPage)
                }
                // when the filtering and query is done, we are going to return the response
                return res.json(response)
            } catch (error) {
                console.log(error)
                return res.status(404).json({error: error.message})
            }
        }


    })

module.exports = router


