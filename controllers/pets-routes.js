const router = require('express').Router()
const pets = [
    {

        pets: "Jake",
        owner: "Finn",
        isMicrochipped: true,
    },

    {
        pets: "Jake",
        owner: "Finn",
        isMicrochipped: true, 

    },

    {
        pets: "Jake",
        owner: "Finn",
        isMicrochipped: true,
    },

]

// render main page
router.get('/', async (req, res) => {
    res.render('index', {
        pets
    })
})

// temporarily allow manual access to handlebars
router.get('/vet-login', (req, res) => {
    res.render('vet-login', {
        pets
    })
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

router.get('/contact', (req, res) => {
    res.render('contact', {
        pets
    })
})

// get pet by ID
router.get('/pet/:id', async (req, res) => {
    return res.render('pet', pets [req.params.id-1])

})


module.exports = router;