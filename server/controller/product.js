var express = require('express'),
    router = express.Router(),
    dbConnector = require('../utils/dbConnector'),
    errorHandler = require('../utils/Error'),
    prodCrudOps = require('./prodCrudOps'),
    _ = require('lodash');

_.extend(router, prodCrudOps);

// Get All Products
router.get('/', function(req, res) {
    dbConnector.getConnection(function(error, connection) {
        if (error) {
            errorHandler.connectionError(error, connection, res);
        } else {
            var query = 'select * from product;';
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

// Get Products by id
router.get('/:id', function(req, res) {
    dbConnector.getConnection(function(error, connection) {
        if (error) {
            errorHandler.connectionError(error, connection, res);
        } else {
            var id = req.params.id;
            var query = 'select * from product where id = \'' + id + '\';';
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

//Get all product by material
router.get('/material/:material', function(req, res) {
    dbConnector.getConnection(function(error, connection) {
        if (error) {
            errorHandler.connectionError(error, connection, res);
        } else {
            var material = req.params.material || 'GOLD';
            var query = 'select * from product where material = \'' + material + '\';';
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

//Get All Product by Material and category
router.get('/material/:material/category/:category', function(req, res) {
    dbConnector.getConnection(function(error, connection) {
        if (error) {
            errorHandler.connectionError(error, connection, res);
        } else {
            var material = req.params.material || 'GOLD';
            category = req.params.category || 'RING';
            var query = 'select * from product where material = \'' + material + '\' and category = \'' + category + '\';';
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

module.exports = router;