const express    = require('express');
const app        = express();
const bodyParser = require('body-parser');
const database   = require('./app/config/dbconfig');

database.init();

const port = process.argv[2] || 8000;

app.listen(port, () => console.log('server listening on port :' + port));

app.use(bodyParser.urlencoded({extend: false}));
app.use(bodyParser.json());

const REST_API_ROOT = '/api';
app.use(REST_API_ROOT, require('./app/routes/Router'));