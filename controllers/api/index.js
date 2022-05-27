const router = require('express').Router();
const vetsRoutes = require('./vets-routes');
router.use('/vets',vetsRoutes);











router.get('/',(req,res) => {
    res.json('please use /vets routes')
})






module.exports = router;