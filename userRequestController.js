import userRequest from "./userRequest.js";



class UserRequestController {
    async create(req, res) {
        try{
            await userRequest.create(req.body)
            res.status(200).json(req.body)
            console.log(req.body)
        } catch (e){
            res.status(500).json(e)
        }
    }

    async getAll(req, res){
        try {
            const posts = await userRequest.find()
            return res.json(posts);
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getOne(req, res ){
        try {
            const {id} = req.params
            if (!id){
                return res.status(400).json({message: "id is not valid"})
            }
            const post = await userRequest.findById(id)
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
            const updatedPost = await userRequest.findByIdAndUpdate(post._id, post, {new : true})
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
            const post = await userRequest.findByIdAndDelete(id)
            return res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }

}
export default new UserRequestController();