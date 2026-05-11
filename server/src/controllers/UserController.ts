import { Request, Response } from "express";
import User from "../models/user.js";

class UserController {
    getCurrentUser = async (req: Request, res: Response) => {
        try {
            const userId = (req as any).user?.id;
            if (!userId) {
                return res.status(401).json({ message: "Unauthorized" });
            }
            const user = await User.findById(userId).select("-password");
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            res.status(200).json({
                message: "User fetched successfully",
                user
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }

    getAllUsers = async (_req: Request, res: Response) => {
        try {
            const users = await User.find().select("-password");
            res.status(200).json({
                message: "Users fetched successfully",
                users
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
}

export default new UserController();