const router = require('express').Router();
const vetsRoutes = require('./vets-routes');
router.use('/pets',vetsRoutes);











router.get('/',(req,res) => {
    res.json('please use /pets routes')
})






module.exports = router;