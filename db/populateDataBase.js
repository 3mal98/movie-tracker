const { db } = require('.')
const { filmData, userData } = require('./seedData')
const { User, Film } = require('../models')

let populateDataBase = async () => {
    await db.sync({ force: true })
    await Promise.all(userData.map((c) => {User.create(c)}))
    await Promise.all(filmData.map((c) => {Film.create(c)}))
}

let buildDB = async () => {
    await populateDataBase()
}

module.exports = {buildDB}

// completed!