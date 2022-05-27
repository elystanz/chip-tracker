const sequelize = require('../config/connection');
const seedPet = require('./petsData')
// const  Pets  = require('../models/pets');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seedPet();

  process.exit(0);
};

seedDatabase();
