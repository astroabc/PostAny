const Post =  require('../models/Post.js')

 const getPost = async(req,res)=>{
    try {
        const post = await Post.find()
        res.status(200).json({
            post: post,
            success: true
        });
    } catch (error) {
        res.status(404).json({ 
            success:false, 
            message: error.message 
        });
    }
}

 const createPost = async(req,res)=>{
    const {user, content, image, comment} = req.body
    if(!content) return {success: false, message: "Please fill content for this post"}
    try {
        console.log(123);
        const post = new Post({
            user, content, image, comment
        });
        await post.save();
        res.status(201).json(post);
    } catch (error) {
        res.status(404).json({ 
            success:false, 
            message: error.message 
        });
    }
}

module.exports = {getPost, createPost}