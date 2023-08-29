require('dotenv').config()

//express config
const express = require('express')
const cors = require('cors')
const body_parser = require('body-parser')

const app = express()

//middlewares
app.use(cors())
app.use(express.json())
app.use(body_parser.json())

//routes
const route = require('./Routes/portfolioRoute')
app.use('/api/v1/portfolio', route)

//port
const port = process.env.PORT || 5000

//database
app.listen(port, () => {
    console.log(`server is running on port number ${port}`)
})
