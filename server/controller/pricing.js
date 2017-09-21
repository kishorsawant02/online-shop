var express = require('express'),
    router = express.Router(),
    dbConnector = require('../utils/dbConnector'),
    errorHandler = require('../utils/Error'),
    helper = require('../utils/helper');
    _ = require('lodash');

// Get all pricing data
router.get('/', function(req, res) {
    dbConnector.getConnection(function(error, connection) {
        if (error) {
            errorHandler.connectionError(error, connection, res);
        } else {
            var query = 'select * from pricing;';
            dbConnector.operation(query, connection, function(error, result, field) {
                if (error) {
                    errorHandler.queryError(error, res);
                } else {
                    res.status(200);
                    res.send(result);
                }
            });
        }
    });
});

//update product
router.post('/update', function(req, res) {
    dbConnector.getConnection(function(error, connection) {
        if (error) {
            errorHandler.connectionError(error, connection, res);
        } else {
            var data = req.body;
            var query = 'SET SQL_SAFE_UPDATES=0;update product,pricing set product.price='+ data.price+', pricing.price='+ data.price +' where product.type=pricing.type AND product.type= \'' + data.type + '\';';
            dbConnector.operation(query, connection, function(error, result, field) {
                if (error) {
                    errorHandler.queryError(error, res);
                } else {
                    res.status(200);
                    res.send({
                            status: 'OK',
                            data: data
                    });
                }
            });
        }
    });
});

module.exports = router;