const express = require('express')
const { getBill } = require('../Controller/portfolioController')

const router = express.Router()

router.post('/getBill', getBill)

module.exports = router
