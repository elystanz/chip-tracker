const express = require("express")
const path = require("path")

// set up variable for handlebars module
const exphbs = require("express-handlebars")

const routes = require("./controllers")
const sequelize = require("./config/connection.js")

const app = express()
const PORT = process.env.PORT || 3001

// accept handlebars
const hbs = exphbs.create({extname: 'handlebars', defaultLayout: 'main', layoutsDir: __dirname + '/views/layout'});

app.engine("handlebars", hbs.engine);
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "handlebars")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '/public')));
app.use(require("./controllers/pets-routes"));
app.use(require("./controllers/logger"));

app.get('/', (req, res) => {
  res.render('main');
});

// turn on routes
app.use(routes)

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"))
})
