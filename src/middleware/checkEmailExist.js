import { User } from "../../Database/Models/user.model.js";
import bcrypt from "bcrypt";

const checkEmailExist = async (req, res, next) => {
    try {
        const isEmailExist = await User.findOne({
            where: {
                email: req.body.email,
            },
        });
        if (isEmailExist) {
            return res.status(409).json({ message: "Email is already exist" });
        }
        req.body.password = bcrypt.hashSync(req.body.password, 10);
        next();
    } catch (error) {
        res.status(500).json({ Message: "Internal Server error", error });
    }
};

export { checkEmailExist };
