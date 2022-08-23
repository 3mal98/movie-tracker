const express = require('express')
const {Film} = require('../models')
const {check, validationResult} = require('express-validator')
const filmsRt = express.Router()

filmsRt.get('/', async (req, res) => {
    const allFilms = await Film.findAll()
    res.send(allFilms)
})

filmsRt.post('/', [check('title').trim().not().isEmpty()], async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }
    await Film.create(req.body)
    res.sendStatus(201)
})

filmsRt.put('/', async (req, res) => {
    console.log(req.body)

    await Film.update({
        username: req.body.id
    }, {
        where: { id:req.body.id}
    })
    res.sendStatus(200)
})

module.exports = {filmsRt}