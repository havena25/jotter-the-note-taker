const router = require('express').Router();

const storeNote = require('../db/store.js');


router.get('/notes', (req, res) => {
    storeNote
        .getNotes()
        .then(notes => {
            res.json(notes)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})



router.post('/notes', (req, res) => {
    console.log(req.body)
    storeNote
        .addNote(req.body)
        .then(note => {
            res.json(note)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})




router.delete('/notes/:id', (req, res) => {
    storeNote
        .removeNote(req.params.id)
        .then(() => res.json({ ok: true }))
        .catch(err => res.status(500).json(err))
})

module.exports = router;