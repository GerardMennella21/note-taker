const router = require('express').Router()
const path = require('path')
const fs = require('fs')
const { v4: uuidv4 } = require('uuid')

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../db/db.json'))
})

router.post('/notes', (req, res) => {
    let db = JSON.parse(fs.readFileSync('db/db.json'))

    let newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4()
    }
    db.push(newNote)
    fs.writeFileSync('db/db.json', JSON.stringify(db))
    res.json(db)
})

router.delete("/notes/:id", (req, res) => {
    let db = JSON.parse(fs.readFileSync('db/db.json'))

    let noteDelete = db.filter(item => item.id !== req.params.id)

    fs.writeFileSync('db/db.json', JSON.stringify(noteDelete))
    res.json(noteDelete)
})

module.exports = router