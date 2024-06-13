import { Post } from "../../../Database/Models/post.model.js";
import { User } from "../../../Database/Models/user.model.js";

//! ============================================ Creating ============================================ //
const addPost = async (req, res, next) => {
    try {
        const { title, content, UserId } = req.body;
        const newPost = await Post.create({ title, content, UserId });
        res.status(201).json({ Message: "post added successfully", newPost });
    } catch (error) {
        res.status(500).json({ Message: "Internal Server error", error });
    }
};

//! ============================================ Reading ============================================ //
const getAllPosts = async (req, res, next) => {
    try {
        const posts = await Post.findAll();
        if (!posts.length) {
            return res.status(404).json({ Message: "No Posts found" });
        }
        res.status(200).json({ Message: "post list", posts });
    } catch (error) {
        res.status(500).json({ Message: "Internal Server error", error });
    }
};

//! ============================================ Updating ============================================ //
const updatePost = async (req, res, next) => {
    try {
        const updatedPost = await Post.update(req.body, {
            where: {
                id: req.params.id,
                UserId: req.body.UserId,
            },
        });
        if (!updatedPost[0]) {
            return res.status(404).json({ Message: "Invalid Input" });
        }
        res.status(200).json({ Message: "edit post", updatedPost });
    } catch (error) {
        res.status(500).json({ Message: "Internal Server error", error });
    }
};

//! ============================================ Deleting ============================================ //
const deletePost = async (req, res, next) => {
    try {
        const deletedPost = await Post.destroy({
            where: {
                id: req.params.id,
                UserId: req.body.UserId,
            },
        });
        if (!deletedPost) {
            return res.status(404).json({ Message: "Invalid Input" });
        }
        res.status(200).json({ Message: "delete post", deletedPost });
    } catch (error) {
        res.status(500).json({ Message: "Internal Server error", error });
    }
};

//! =============================== Get a specific post with the author =============================== //
const getSpecificPost = async (req, res, next) => {
    try {
        const { id } = req.params;
        const post = await Post.findOne({
            where: { id },
            attributes: ["id", "title", "content"],
            include: { model: User, attributes: ["username"] }, // Include the author's username
        });
        res.status(200).json({ Message: "post found successfully", post });
    } catch (error) {
        res.status(500).json({ Message: "Internal Server error", error });
    }
};

export { addPost, getAllPosts, updatePost, deletePost, getSpecificPost };
