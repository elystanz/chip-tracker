const router = require('express').Router();

const pets = [
    {
        owner_name: 'Francis Hubble',
        pet_name: 'Oreo',
        micro_status: true
        
    },
    {
        owner_name: 'Alice Wally',
        pet_name: 'Peaches',
        micro_status: true
    },
    {
        owner_name: 'Billy Jimbles',
        pet_name: 'Rex',
        micro_status: false
    }
];

router.get('/', async (req, res) => {
    const petInfo = pets[req.params.id -1]
    res.render('petInfo', petInfo)
});

module.exports = router;