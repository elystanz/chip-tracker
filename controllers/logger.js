const router = require('express').Router()


router.get('/vet-login', (req, res) => {
    res.render('vet-login')
})

module.exports = router;