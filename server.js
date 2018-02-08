"use strict";

const express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

const apiRoutes = require('./app/routing/apiRoutes'),
    htmlRoutes = require('./app/routing/htmlRoutes');

const port = process.env.PORT || 8080;

app.use(express.static('./app/public'));
app.use(bodyParser.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(port);