var order = require('../controllers/orders-server-controller');

module.exports=function(app, acceptJSON) {    
    app.post('/order', acceptJSON, order.createOrder);
    app.get('/order', acceptJSON, order.getAll);
    app.delete('/order', acceptJSON, order.deleteAll)
    app.get('/order/:order', acceptJSON, order.getById);
    app.put('/order/:order', acceptJSON, order.addItem);
    app.put('/order/:order', acceptJSON, order.deletetem);
    app.delete('/order/:order', acceptJSON, order.deleteOrder);
}
