const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', async (req, res) => {
    try {
        const post = await Post.find();
        res.json(post);
    } catch (error) {
        res.json({
            message: error
        })
    }
});

router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try {
        const savePost = await post.save()
        res.json(savePost);
    }
    catch (err) {
        res.json({
            message: err
        });
    }




    // post.save()
    // .then(data => {
    //     res.json(data)

    // })
    // .catch(err => {
    //     res.json({
    //         message: err
    //     });
    // })


});

router.get('/:postId', async (req, res) => {
    // console.log(req.params.postId);
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    }
    catch (err) {
        res.json({
            message: err
        })
    }
})



// Delete

router.delete('/:postId', async (req, res) => {
    try {
        const deleteDataById = await Post.remove({ _id: req.params.postId });
        res.json(deleteDataById);
    } catch (error) {
        res.json({
            message: error
        })

    }

    // try {
    //     const deleteDataById = await Post.findByIdAndDelete(req.params.postId);
    //     res.json(deleteDataById);
    // } catch (error) {
    //     res.json({
    //         message: error
    //     })

    // }

})

router.patch('/:postId', async (req, res) => {
    try {
        const updateObject = await Post.updateOne(
            { _id: req.params.postId },
            { $set: { title: req.body.title } }
        );
        res.json(updateObject);
    }
    catch (err) {
        res.json({
            message: err
        })
    }
})




module.exports = router;