var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/route', (req, res)=>{
	res.send('Hello Router, <img src="/route.jpeg">');
});

app.get('/', (req, res)=>{
	res.send('Hello World!');
});

app.listen(3000, ()=>{
	console.log('Connected 3000 port!');
});
