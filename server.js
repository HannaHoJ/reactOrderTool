const expess = require('express');
const http = require('http');
//build the app
const app = express();

const port = process.env.PORT || 3000;


app.get('/', (res, req) =>{
	res.send({ express: 'Hello From Express' });
	next()
})

app.get('/categories', (res, req) =>{

})

app.get('/categories/:product', (res, req) =>{
	res.end("You can order " + req.params.product + ".");
})

app.get('/cart', (res, req) => {

})

//start server
http.createServer(app).listen(port)