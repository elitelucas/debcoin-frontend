require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
var session = require('express-session')
const cors = require('cors');
const api=require('./routes');
const next = require('next');    
const mongoose = require("mongoose");
const config = require("./config");
const http = require('http');
const fs = require('fs');
const path=require('path');

//const dev = process.env.NODE_ENV !== 'production'
const dev = false;
// const dev = true;
const app = next({ 
  dev,
  dir: path.join(__dirname, '../'),
  distDir: path.join(__dirname, '../.next'),
 })
const handle = app.getRequestHandler();

app.prepare()
.then(() => {
  const server = express()
  server.set('env', "product");
  // server.set('env', "development");
  var sess = {
      secret: 'sdfwee$#3gqg3gg5gaGhJ',
      cookie: { maxAge: 600000 },
      resave: false,
      saveUninitialized: true
    };
    
  if (server.get('env') === 'production') {
    server.set('trust proxy', 1) // trust first proxy
    sess.cookie.secure = true // serve secure cookies
  }
    
  server.use(session(sess))
  server.use(cors());

  server.use(morgan('dev'));
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(bodyParser.json());
  server.set('trust proxy', true);
  server.use('/api',api);
  server.get('*', (req, res) => {
    return handle(req, res)
  });
  server.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
  });

  server.use((error, req, res, next) => {
    res.status(error.status || 500).json({
      message: error.message
    });
  });

  http.createServer(server)
  .listen(config.port, function () {
    console.log('Example app listening on port 3000! Go to http://localhost:3000/')
  });

})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
});


const connect = url => {
  return mongoose.connect(url, config.db.options);
};

  

connect(config.db.dev);
mongoose.connection.on('error', console.log);


module.exports = { connect };

