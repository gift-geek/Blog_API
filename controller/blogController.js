const BlogModel = require("../model/blogModel");

const getAllPost = async(req,res)=>{
    try{
        const posts = await BlogModel.find();
        return res.status(200).json({message : "All Posts", data : posts});
    }catch(error){
        return res.status(500).jsom({message : "Error getting all post", error : error.message})
    }
};

const getOnePost = async(req,res)=>{
    try{
        const {id} = req.params
        const post = await BlogModel.findById(id);
        return res.status(200).json({message:"Post Found", data : post})
    }catch(error){
        return res.status(500).json({message : "Error getting post", error : error.message})
    }
};

const createPost = async(req,res)=>{
    try{
        const {title,content,author,category} = req.body
        const post = await BlogModel.create({title,content,author,category});
        return res.status(200).json({message: "Post Created", data : post});
    }catch(error){
        return res.status(500).json({message: "Error creating post", errror : error.message})
    }
};

const updatePost = async(req,res)=>{
    try{
        const {id} = req.params;
        const {title,content,category,published} = req.body;
        const update = await BlogModel.findByIdAndUpdate(id, {title, content, category, published}, {new: true});
        return res.status(200).json({message : "Post Updated", data : update});
    }catch(error){
        return res.status(500).json({message : "Error updating post", error : error.message})
    }
};

const deletePost = async(req,res)=>{
    try{
        const {id} = req.params;
        const deletes = await BlogModel.findByIdAndDelete(id);
        return res.status(200).json({message: "Post deleted"});
    }catch(error){
        return res.status(500).json({message : "Error deleting post", error : error.message})
    }
};

const getAllPublished = async(req,res)=>{
    try{
        const posts = await BlogModel.find({published:true});
        return res.status(200).json({message : "Published Posts", data : posts});
    }catch(error){
        return res.status(500).json({message : "Error Getting all Published", error : error.message})
    }
};

const searchCategory = async(req,res)=>{
    try{
       const {category} = req.params;
       const categories = await BlogModel.find({
        category : {$regex : category, $options : "i"}
       }) ;
       if(categories.length === 0){
        return res.status(400).json({message : "No post in this category"});
       }
       return res.status(200).json({message : "Category Found", data : categories})
    }catch(error){
        return res.status(500).json({message : "Error searching for category", error : error.mrssage})
    }
};

const searchAuthor = async(req,res)=>{
    try{
        const {author} = req.params;
        const authors = await BlogModel.find({
            author : {$regex : author, $options : "i"}
        });
        if(authors.length === 0){
            return res.status(400).json({message : "No author found"})
        }
        return res.status(200).json({message : "Author found", data : authors})
    }catch(error){
        return res.status(500).json({message : "Error searching for Author", error : error.message})
    }
};

module.exports = {
    updatePost,
    deletePost,
    getAllPublished,
    searchCategory,
    searchAuthor,
    createPost,
    getOnePost,
    getAllPost,
}