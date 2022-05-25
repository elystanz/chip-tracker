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
router.get('/', async (req, res) => {
    res.render('index', {
        pets
    })
})


router.get('/pet/:id', async (req, res) => {
    return res.render('pet', pets [req.params.id-1])

})


module.exports = router;