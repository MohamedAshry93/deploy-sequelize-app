import { Comment } from "../../../Database/Models/comment.model.js";

//! ============================================ Creating ============================================ //
const addComment = async (req, res, next) => {
    try {
        const { content, UserId, PostId } = req.body;
        const newComment = await Comment.create({ content, UserId, PostId });
        res.status(201).json({ Message: "comment added successfully", newComment });
    } catch (error) {
        res.status(500).json({ Message: "Internal Server error", error });
    }
};

//! ============================================ Reading ============================================ //
const getAllComments = async (req, res, next) => {
    try {
        const comments = await Comment.findAll();
        if (!comments.length) {
            return res.status(404).json({ Message: "No Comments found" });
        }
        res.status(200).json({ Message: "post list", comments });
    } catch (error) {
        res.status(500).json({ Message: "Internal Server error", error });
    }
};

//! ============================================ Updating ============================================ //
const updateComment = async (req, res, next) => {
    try {
        const updatedComment = await Comment.update(req.body, {
            where: {
                id: req.params.id,
                UserId: req.body.UserId,
                PostId: req.body.PostId,
            },
        });
        if (!updatedComment[0]) {
            return res.status(404).json({ Message: "Invalid Input" });
        }
        res.status(200).json({ Message: "edit post", updatedComment });
    } catch (error) {
        res.status(500).json({ Message: "Internal Server error", error });
    }
};

//! ============================================ Deleting ============================================ //
const deleteComment = async (req, res, next) => {
    try {
        const deleteComment = await Comment.destroy({
            where: {
                id: req.params.id,
                UserId: req.body.UserId,
                PostId: req.body.PostId,
            }
        });
        if (!deleteComment) {
            return res.status(404).json({ Message: "Invalid Input" });
        }
        res.status(200).json({ Message: "delete post", deleteComment });
    } catch (error) {
        res.status(500).json({ Message: "Internal Server error", error });
    }
}

export { addComment, getAllComments, updateComment, deleteComment };
