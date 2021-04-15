let express = require('express')
let router = express.Router()

router.get('/', function(req, res, next){
    res.json( { 'message': 'Hello! I am working! Fixed 4/15/2021'} )
})

module.exports = router