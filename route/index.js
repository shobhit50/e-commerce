const express = require('express');
const app = express();

app.use('user', require('./route/user'));
app.use('product', require('./route/product'));