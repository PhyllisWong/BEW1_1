const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const http = require('http');
const giphy = require('giphy-api')();
const port = 3000;


// Middleware
app.engine('hbs', exphbs({defaultLayout: 'main', extname: 'hbs'}));
app.set('view engine', 'hbs');

// Tell the app where to load the static content from
app.use(express.static('./public'));


// ROUTES
// Main route
app.get('/', (req, res) => {
	giphy.search(req.query.term, (err, response) => {

		if (err != null) {
			console.log('CRASHED: ', err);
			giphy.trending((err, response) => {
				res.render('home', { gifs: response.data })
			});
		} else {
      res.render('home', { gifs: response.data })
		}
	});
});

app.get('/hello-gif', (req, res) => {
	let gifUrl = 'http://media2.giphy.com/media/gYBVM1igrlzH2/giphy.gif';
	res.render('hello-gif', {gifUrl: gifUrl}); // Render the hello template & Pass this variable to the template
});

app.get('/greetings/:name', (req, res) => {
	let name = req.params.name;
	res.render('greetings', {name: name});

});


// Server
app.listen(port, () => {
	console.log('Gif Search listening on port localhost:3000!');
});