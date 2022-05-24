const sequelize = require('../config/connection');
const  Pets  = require('../models/pets');

const petsSeedData = require('./seeds.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Pets.bulkCreate(petsSeedData, {
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
