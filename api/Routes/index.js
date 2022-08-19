const { Router } = require('express')
const router = Router()

const Countrie = require('./Routes/Countries/index.js')

router.use('countries', Countrie )

module.exports = router