'use strict';

if (process.env.NODE_ENV === 'production') {
  require('@google-cloud/trace-agent').start();
  require('@google-cloud/debug-agent').start();
}
const path = require('path');
const express = require('express');
const session = require('express-session');
//const passport = require('passport');
const config = require('./config');
//const logging = require('./build/src/lib/logging');
const {Datastore} = require('@google-cloud/datastore');
const DatastoreStore = require('@google-cloud/connect-datastore')(session);

const app = express();
app.use(require('connect-history-api-fallback')());
app.use(express.static(path.resolve(path.join(__dirname, '/dist'))));


// Setup view engine
app.set('view engine', 'vue');
app.set('trust proxy', true);

// Add the request logger before anything else so that it can
// accurately log requests.
// [START requests]
//app.use(logging.requestLogger);
// [END requests]

// Configure the session and session storage.
const sessionConfig = {
  resave: false,
  saveUninitialized: false,
  secret: config.get('SECRET'),
  signed: true,
  store: new DatastoreStore({
    dataset: new Datastore({kind: 'express-sessions'}),
  }),
};

//app.use(session(sessionConfig));

// OAuth2
//app.use(passport.initialize());
//app.use(passport.session());
//app.use(require('./build/src/lib/oauth2').router);


app.get('/', (req, res) => {
    res.render('index');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
});