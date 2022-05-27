const Pets = require('../models')

const petsdata = 

[
    {
        "pet": "Jake",
        "owner": "Finn",
        "isMicrochipped": "true"
    },
    {
        "pet": "Jake",
        "owner": "Finn",
        "isMicrochipped": "true"
    },
    {
        "pet": "Jake",
        "owner": "Finn",
        "isMicrochipped": "true"
    }
]

const seedPet = () => Pets.bulkCreate(petsdata)
module.exports = seedPet;
