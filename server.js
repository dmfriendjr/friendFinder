"use strict";

const express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

const apiRoutes = require('./app/routing/apiRoutes'),
    htmlRoutes = require('./app/routing/htmlRoutes');
    
app.use(bodyParser());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(3000);

