var _ = require('lodash');
var express = require('express');
var request = require('request-promise');
var router = express.Router();

router.post('/', async (req, res, next) => {
    
    const {body} = req;
    
	if( !body.id_user || body.id_flight ) {
        return res.status(400).send({message: 'il manque de donnes' }) ;
        
    }
        
	 return res.status(201).send({reference : '123'});
});

module.exports = router;

