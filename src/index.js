const express = require('express');
const bodyParser = require('body-parser');

const config = require('./config');
const api_auth = require('./api/auth');
const api_store = require('./api/store');

const app = express();

app.set('port', config.http.port);
app.set('ssl_port', config.ssl.port);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/api/sign_up', api_auth.signUp);
app.post('/api/sign_in', api_auth.signIn);

require('./auth').init(app);

app.get('/api/storage', api_store.get);
app.put('/api/storage', api_store.put);

require('./server').listen(app);