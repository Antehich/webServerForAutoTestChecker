import Post from "./post.js";
import checker from "./checker.js";


class PostController{
    async create(req, res) {
        try{
            await Post.create(req.body)
            res.status(200).json(checker(req.body))
        } catch (e){
            res.status(500).json(e)
        }
    }

    async getAll(req, res){
        try {
            const posts = await Post.find()
            return res.json(posts);
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getOne(req, res){
        try {
            const {id} = req.params
            if (!id){
                return res.status(400).json({message: "id is not valid"})
            }
            const post = await Post.findById(id)
            return res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async update(req, res){
        try {
            const post = req.body
            if (!post._id){
                return res.status(400).json({message: "id is not valid"})
            }
            const updatedPost = await Post.findByIdAndUpdate(post._id, post, {new : true})
            return res.json(updatedPost);
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async delete(req, res){
        try {
            const {id} = req.params
            if (!id){
                return res.status(400).json({message: "id is not valid"})
            }
            const post = await Post.findByIdAndDelete(id)
            return res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }

}
export default new PostController();