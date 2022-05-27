const router = require('express').Router()
const Pets = require('../models')
const withAuth = require('../utils/auth');


// render main page
router.get('/', async (req, res) => {

    res.render('index')
})

// temporarily allow manual access to handlebars
router.get('/vet-login', (req, res) => {
    res.render('vet-login')
})

router.get('/vet', (req, res) => {
    res.render('vet', {
        pets
    })
})

router.get('/client-login', (req, res) => {
    res.render('client-login', {
        pets
    })
})

router.get('/client', (req, res) => {
    res.render('client', {
        pets
    })
})

// get pet by ID
router.get('/pet/:id', async (req, res) => {
    return res.render('pet', pets [req.params.id-1])

})


module.exports = router;