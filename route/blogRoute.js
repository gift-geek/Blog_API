const express = require("express");
const router = express.Router();
const {
    updatePost,
    deletePost,
    getAllPublished,
    searchCategory,
    searchAuthor,
    createPost,
    getOnePost,
    getAllPost
} = require("../controller/blogController");

router.get("/getAllPost",getAllPost);
router.get("/getOnePost/:id",getOnePost);
router.get("/getAllPublished",getAllPublished);
router.post("/createPost",createPost);
router.patch("/updatePost/:id",updatePost);
router.delete("/deletePost/:id",deletePost);
router.get("/searchCategory/:category",searchCategory);
router.get("/searchAuthor/:author",searchAuthor)

module.exports = router;