const express = require('express');
const routes = require('./routes');
const db = require('./db');
const helmet = require('helmet');

const server = express();
const devPort = 4000;
const port = process.env.PORT || 4001;

db();
server.use(helmet());
server.use(routes);

if (process.env.NODE_ENV.trim() == 'development') {
    server.listen(devPort, () => {
        server.use(express.static('dist'));
        console.log(`#### webpack-dev-server is listening on port ${devPort}. ${new Date().toLocaleString()} ####`);
    });
} else if (process.env.NODE_ENV.trim() == 'production') {
    server.listen(port, () => {
        server.use(express.static('build'));
        console.log(`#### Express listening on port ${port}. ${new Date().toLocaleString()} ####`);
    });
}