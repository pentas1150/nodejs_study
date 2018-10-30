var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/dynamic', (req, res) => {
	var lis = '';
	for(var i=0; i<5; i++){
		lis = lis + '<li>coding</li>';
	}
	var time = Date();
	var output = `
	<!DOCTYPE html>
	<html>
		<head>
			<meta charset='utf-8'>
			<title></title>
		</head>
		<body>
		Hello, Dynamic!
		<ul>
			${lis}
		</ul>
		${time}
		</body>
	</html>`
	res.send(output);
});

app.get('/route', (req, res) => {
	res.send('Hello Router, <img src="/route.jpeg">');
});

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(3000, () => {
	console.log('Connected 3000 port!');
});
