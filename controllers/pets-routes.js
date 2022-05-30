const router = require('express').Router()
const Pets = require('../models/pets')
const withAuth = require('../utils/authetntication');
const fs = require('fs')




// render main page
router.get('/', async (req, res) => {

    res.render('index')
    console.log('but')
})

router.post('/',async(req,res) =>{
    const username = req.body.username
    const password = req.body.password
    const users = []
    users.push(username)
    users.push(password)
})

// temporarily allow manual access to handlebars
router.get('/vet-login', (req, res) => {
    res.render('vet-login')
})

router.get('/vet', async (req, res) => {
    try{
        const pet =  await Pets.findAll()
        const pets = pet.map((animal)=>
        animal.get({plain:true}));
    
    res.render('vet', {
        pets,
        loggedIn: req.session.loggedIn
    });
} catch (err){
    console.log(err);
    res.status(500).json(err);
}
});

router.get('/client-login', (req, res) => {
    res.render('client-login')
})

router.get('/client', async (req, res) => {
    try{ 
        const pet = await Pets.findAll()
        const pets = pet.map((animal)=>
        animal.get({plain:true}))
    
    res.render('client',{
        pets,
        loggedIn: req.session.loggedIn
    });
}catch (err){
    console.log(err);
    res.status(500).json(err);}})

router.get('/contact', (req, res) => {
    res.render('contact')
})

// get pet by ID
router.get('/pet/:id', async (req, res) => {
    return res.render('pet', pets [req.params.id-1])

})


module.exports = router;