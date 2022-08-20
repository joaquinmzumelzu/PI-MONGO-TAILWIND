const { Router } = require('express')
const router = Router()

const Countrie = require('./Countries/index.js')

router.use('/countries', Countrie )

module.exports = router