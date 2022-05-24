const express = require('express');

// set up variable for handlebars module
const exphbs = require('express-handlebars');

const routes = require('./controllers/routes.js');
const sequelize = require('./config/connection.js');

const app = express();
const PORT = process.env.PORT || 3001;

// accept handlebars
const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

