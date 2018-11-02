import express from 'express';
import { join } from 'path';
import open from 'open';

var port = 3005
var app  = express()

app.get('/', function(req, res ) {
	res.sendFile(join(__dirname, '../../src/index.html'))
})

app.listen(port, function(err) {
		if(err){
			console.log(err)
		} else {
			open('http://localhost:' + port);
		}
})
