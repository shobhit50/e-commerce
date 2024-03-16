const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connect = require('./config/config');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connect();

const port = 3000;

app.use('/', require('./route/index'));


app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
