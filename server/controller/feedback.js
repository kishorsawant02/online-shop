var express = require('express'),
    router = express.Router(),
    dbConnector = require('../utils/dbConnector'),
    errorHandler = require('../utils/Error'),
    helper = require('../utils/helper');

// get all feedback
router.get('/', function(req, res) {
    dbConnector.getConnection(function(error, connection) {
        if (error) {
            errorHandler.connectionError(error, connection, res);
        } else {
            var query = 'select * from feedback;';
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

// save user's feedback
router.post('/insert', function(req, res) {
    dbConnector.getConnection(function(error, connection) {
        if (error) {
            errorHandler.connectionError(error, connection, res);
        } else {
            var data = helper.getKeyValueArray(req.body);
            var query = 'INSERT INTO feedback (`' + data.keys.join('`, `') + '`) VALUES (\'' + data.values.join('\', \'') + '\');';
            dbConnector.operation(query, connection, function(error, result, field) {
                if (error) {
                    errorHandler.queryError(error, res);
                } else {
                    res.status(200);
                    res.send({
                        feedback: {
                            status: 'OK',
                            acknowledgeMentNumber: result && result.insertId
                        }
                    });
                }
            });
        }
    });
});

//delete feedback
router.delete('/delete/:id', function(req, res) {
    dbConnector.getConnection(function(error, connection) {
        if (error) {
            errorHandler.connectionError(error, connection, res);
        } else {
            var id = req.params.id;
            var query = 'delete from feedback where id=' + id + ';';
            dbConnector.operation(query, connection, function(error, result, field) {
                if (error) {
                    errorHandler.queryError(error, res);
                } else {
                    res.status(200);
                    res.send({
                        status: 'DELETED_SUCCESS'
                    });
                }
            });
        }
    });
});

module.exports = router;


//sample payload
/*{
  "name": "gold_ring",
  "msg": 10,
  "mobile": 1234567890,
  "address": "Aurangabad"
}*/