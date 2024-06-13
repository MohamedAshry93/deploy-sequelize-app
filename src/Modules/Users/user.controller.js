import { where } from "sequelize";
import { Comment } from "../../../Database/Models/comment.model.js";
import { Post } from "../../../Database/Models/post.model.js";
import { User } from "../../../Database/Models/user.model.js";
import bcrypt from "bcrypt";

//! ============================================= Registration ============================================= //
const signUp = async (req, res, next) => {
    try {
        const { userName, email, password } = req.body;
        const newUser = await User.create({ userName, email, password });
        res.status(201).json({ Message: "user added successfully", newUser });
    } catch (error) {
        res.status(500).json({ Message: "Internal Server error", error });
    }
};

//! ============================================= Login ============================================= //
const signIn = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });
        if (user && bcrypt.compareSync(password, user.password)) {
            res
                .status(200)
                .json({ Message: "user login successfully", user: user.userName });
        } else {
            res.status(401).json({ Message: "user not found" });
        }
    } catch (error) {
        res.status(500).json({ Message: "Internal Server error", error });
    }
};

//! ===================== Get a specific user with a specific post and post’s comments ===================== //
const getSpecificUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await User.findOne({
            where: { id },
            attributes: { exclude: ["password", "email", "createdAt", "updatedAt"] },
            // include: [
            //     {
            //         model: Post,
            //         attributes: ['id', 'title', 'content', 'UserId'],
            //         include: {
            //             model: Comment,
            //             attributes: ['id', 'content', 'PostId', 'UserId']
            //         },
            //     },
            // ],
            include: [
                {
                    model: Comment,
                    attributes: ["id", "content", "UserId", "PostId"],
                    include: {
                        model: Post,
                        attributes: ["id", "content", "title", "UserId"],
                    },
                },
            ],
        });
        res.status(200).json({ Message: "user found successfully", user });
    } catch (error) {
        res.status(500).json({ Message: "Internal Server error", error });
    }
};

export { signUp, signIn, getSpecificUser };
