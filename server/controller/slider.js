var express = require('express'),
    router = express.Router(),
    dbConnector = require('../utils/dbConnector'),
    errorHandler = require('../utils/Error'),
    sliderCrud = require('./sliderCrud'),
    _ = require('lodash');

_.extend(router, sliderCrud);
// Get favourite Products
router.get('/category', function(req, res) {
    dbConnector.getConnection(function(error, connection) {
        if (error) {
            errorHandler.connectionError(error, connection, res);
        } else {
            var query = 'select * from favourite;';
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
//delete product
router.delete('/category/delete/:id', function(req, res) {
    dbConnector.getConnection(function(error, connection) {
        if (error) {
            errorHandler.connectionError(error, connection, res);
        } else {
            var id = req.params.id;
            var query = 'delete from favourite where id=' + id + ';';
            dbConnector.operation(query, connection, function(error, result, field) {
                if (error) {
                    errorHandler.queryError(error, res);
                } else {
                    res.status(200);
                    res.send({
                        status: 'DELETED_SUCCESS',
                        productId: req.params.id
                    });
                }
            });
        }
    });
});
// Get Products by id
router.get('/category/:id', function(req, res) {
    dbConnector.getConnection(function(error, connection) {
        if (error) {
            errorHandler.connectionError(error, connection, res);
        } else {
            var id = req.params.id;
            var query = 'select * from favourite where id = \'' + id + '\';';
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

//get all latest product for dashboard Slider
router.get('/latest', function(req, res) {
    dbConnector.getConnection(function(error, connection) {
        if (error) {
            errorHandler.connectionError(error, connection, res);
        } else {
            var query = 'select * from advertisement;';
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

//delete product
router.delete('/latest/delete/:id', function(req, res) {
    dbConnector.getConnection(function(error, connection) {
        if (error) {
            errorHandler.connectionError(error, connection, res);
        } else {
            var id = req.params.id;
            var query = 'delete from advertisement where id=' + id + ';';
            dbConnector.operation(query, connection, function(error, result, field) {
                if (error) {
                    errorHandler.queryError(error, res);
                } else {
                    res.status(200);
                    res.send({
                        status: 'DELETED_SUCCESS',
                        productId: req.params.id
                    });
                }
            });
        }
    });
});
// Get Products by id
router.get('/latest/:id', function(req, res) {
    dbConnector.getConnection(function(error, connection) {
        if (error) {
            errorHandler.connectionError(error, connection, res);
        } else {
            var id = req.params.id;
            var query = 'select * from advertisement where id = \'' + id + '\';';
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