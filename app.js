const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

// API ENDPOINTS

const port = 5500
app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
})
const { Bug, Developer, Tester, Issuer } = require('./sequelize')
// create a Bug
app.post('/api/bugs', (req, res) => {
    Bug.create(req.body)
        .then(bug => res.json(bug))
})
// get all Bugs
app.get('/api/bugs', (req, res) => {
    Bug.findAll().then(bugs => res.json(bugs))
})

// adding a developer
app.post('/api/developers', (req, res) => {
    const body = req.body
    // either find a bug with info or create a new one
    const bugs = body.bugs.map(bug => bug.findOrCreate({ where: { info: bug.info }, defaults: { info: bug.info }})
                                         .spread((bug, created) => bug))
    Issuer.findById(body.IssuerId)
        .then(() => Developer.create(body))
        .then(developer => Promise.all(bugs).then(storedBugs => developer.addBugs(storedBugs)).then(() => developer))
        .then(developer => Developer.findOne({ where: {id: developer.id}, include: [Issuer, Bug]}))
        .then(developerWithAssociations => res.json(developerWithAssociations))
        .catch(err => res.status(400).json({ err: `Bug with id = [${body.ussuerId}] doesn\'t exist.`}))
})

// find bugs belonging to one developer or all bugs
app.get('/api/bugs/:developerId?', (req, res) => {
    let query;
    if(req.params.developerId) {
        query = Bug.findAll({ include: [
            { model: Developer, where: { id: req.params.developerId } },
            { model: Issuer }
        ]})
    } else {
        query = Bug.findAll({ include: [Issuer, Developer]})
    }
    return query.then(bugs => res.json(bugs))
})

