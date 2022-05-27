const router = require('express').Router();
const apiRoutes = require('./api')
const petsRoutes = require('./pets-routes')
router.use('/api',apiRoutes)
router.use('/',petsRoutes)
module.exports = router