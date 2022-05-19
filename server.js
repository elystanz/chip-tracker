const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const hbs = exphbs.create({});

const PORT = process.env.PORT || 3001;
const app = express()

// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');

// app.use(express.static(path.join(__dirname, 'css')));
// app.use(require('./controllers/pet-routes'))

app.get('/',(req, res)=>{
    res.sendStatus(200)
})

app.listen(PORT,() => {
    console.log(`listening on http://localhost:${PORT}`)
})