const express=require('express');
const path=require('path');
const bodyParser=require('body-parser');
//const session=require('express-session');
const url=require('url');

// const product = require('../app/routes/products-server-routes.js');
// const order = require('../app/routes/products-server-routes.js');
// const categories = require('../app/routes/products-server-routes.js');

module.exports=function() {
	//eigene Middleware zur Ausgabe der Anfrage auf der Konsole
    const logger=function(req, res, next) {
        console.log(req.method, req.url);
        next();
    }

 //Funktion zur Überprüfung, ob die Client json als Antwort akzeptiert	
    function acceptJSON(req, res, next) {
        if (req.accepts('application/json')) {
            return next();
        }
        res.redirect('/');
    }

    const app = express();
    app.use(logger);
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    // app.use(session({
    //     secret: 'dietz-order',
    //     resave: 'true',
    //     saveUninitialized: 'true',
    //     cookie: { maxAge: 60*60*24*365*1000 }
    // }));

    //Middleware for SignIn, SignUp, SignOut
    // const userMiddleware=require('../app/routes/user-server-routes.js'); 
    // userMiddleware.registerMiddleware(app);
    
    //Middleware for Products
    const productMiddleware = require('../app/routes/products-server-routes.js');
    productMiddleware(app, acceptJSON);
    
    //Middleware for Orders
    const orderMiddleware=require('../app/routes/orders.server.routes.js');
    orderMiddleware(app, acceptJSON);
    
    // //Middleware for die Generierung der Timeline
    // const categoriesMiddleware=require('../app/routes/categories.server.routes.js');
    // categoriesMiddleware(app, acceptJSON);

    app.use('/', function(req,res,next){
		res.send('hallo');

    });

}