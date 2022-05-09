const router = require('express').Router()
const path = require('path')
const fs = require('fs')

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../db/db.json'))
})

router.post('/notes', (req, res) => {
    let db = JSON.parse(fs.readFileSync('db/db.json'))

    let newNote = {
        title: req.body.title,
        text: req.body.text,
        id: db.length
    }
    db.push(newNote)
    fs.writeFileSync('db/db.json', JSON.stringify(db))
    res.json(db)
})

module.exports = router