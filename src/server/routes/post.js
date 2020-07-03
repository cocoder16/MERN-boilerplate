const PostController = require('../controllers/postController');

module.exports = function (router, upload) {
    router.post('/post', upload.none(), (req, res) => {
        res.status(200).send(PostController.createPost(req.body));
    });

    router.get('/post', (req, res) => {
        res.status(200).send(PostController.getPost());
    });

    router.put('/post', upload.none(), (req, res) => {
        res.status(200).send(PostController.updatePost(req.body));
    });

    router.delete('/post', (req, res) => {
        res.status(200).send(PostController.deletePost());
    });
}