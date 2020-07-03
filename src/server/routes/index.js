const express = require('express');
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const url = require('url');
const mime = require('mime-types');

const router = express.Router();
const upload = multer();

// get api
fs.readdirSync(__dirname).forEach((file) => {
    if (file == 'index.js') return;
    require(`./${file.substr(0, file.indexOf('.'))}`)(router, upload);
});

// get path of index.html
let root;
if (process.env.NODE_ENV.trim() == 'development') {
    root = path.resolve(__dirname, '../../../dist');
} else if (process.env.NODE_ENV.trim() == 'production') {
    root = path.resolve(__dirname, '../../../build');
}
const index = path.resolve(root, 'index.html');

// serve others
router.get('/*.*', (req, res) => {
    const options = url.parse(req.url, true);
    res.setHeader('content-type', mime.lookup(options.pathname.split('.')[1]));
    res.sendFile(path.resolve(root, options.pathname));
})

// serve index.html
router.get('*', (req, res) => {
    res.sendFile(index);
})

module.exports = router;