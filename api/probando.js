const axios = require('axios')

async function probando () {
    const response = await axios.post('http://localhost:3001/countries/probando', {"name":'pedriñoooo'})
    console.log(response.data)
}
probando()