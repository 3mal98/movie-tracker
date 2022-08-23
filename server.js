const {buildDB} = require('./db/populateDataBase')
const express = require('express')
const {filmsRt, usersRt} = require('./routes')
const app = express()
const PORT = 3000
buildDB()

app.use(express.json())
app.use('/films', filmsRt)
app.use('/users', usersRt)

app.listen(PORT, () => {
    console.log(`The server is live and listening at port ${PORT}`)
})

