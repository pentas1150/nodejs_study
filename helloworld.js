var express = require('express');
var app = express(); //express return application

app.get('/', (req, res)=>{
	res.send('Hello wolrd');
});

app.get('/login', (req, res)=>{
	res.send('Login please');
});

app.listen(3000, ()=>{
	console.log('Connected 3000 port!');
}); //port number
