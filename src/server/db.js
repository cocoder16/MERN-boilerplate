const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

module.exports = () => {
    function connect() {
        let uri;
        if (process.env.NODE_ENV.trim() == 'development') {
            uri = process.env.DEV_MONGO_URI;
        } else if (process.env.NODE_ENV.trim() == 'production') {
            uri = process.env.MONGO_URI;
        }
        mongoose.connect(uri, {
            useNewUrlParser: true, useUnifiedTopology: true
        }, function(err) {
            if (err) {
                console.error('#### mongodb connection error : ', err);
            }
            console.log('#### mongodb connected ####');
        });
    }
    connect();
    mongoose.connection.on('disconnected', connect);
}