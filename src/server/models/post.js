const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    id: { type: Number }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;