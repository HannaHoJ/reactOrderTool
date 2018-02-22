var product = require('../controllers/products-server-controller');

module.exports=function(app, acceptJSON) {    
    app.get('/categories', acceptJSON, product.getCategories);
    //app.get('/categories/:product', acceptJSON, product.getAll);
    app.get('/categories/:product', acceptJSON, product.getById);
    app.get('/categories/:product', acceptJSON, product.getProductsByCategory);

    //admin actions
    app.post('/categories/:product', acceptJSON, product.createProduct);
    app.delete('/categories/:product', acceptJSON, product.updateProduct);
    app.delete('/categories/:product', acceptJSON, product.deleteProduct);
    app.delete('/categories', acceptJSON, product.deleteAll);

}