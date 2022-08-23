const express = require('express')
const {User} = require('../models')
const {check, validationResult} = require('express-validator')
const usersRt = express.Router()

usersRt.get('/', async (req, res) => {
    const allUsers = await User.findAll()
    res.send(allUsers)
})

usersRt.post('/', [check('username').trim().not().isEmpty()], async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }
    await User.create(req.body)
    res.sendStatus(201)
})

usersRt.get('/:id', async (req, res) => {
    const data = await User.findByPk(req.params.id)
    if (!data) {
        res.status(400).send('There is no user with this id.')
        return
    }
    res.send(data)
})

module.exports = {usersRt}