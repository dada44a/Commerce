import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

class AuthController {
    register = async (req: Request, res: Response) => {
        try {
            const { name, email, password, role } = req.body;
            if (!name || !email || !password) {
                return res.status(400).json({ message: "All fields are required" });
            }

            const hashedPassword = await bcrypt.hash(password, 10);
            const isAlreadyExists = await User.findOne({ email });
            if (isAlreadyExists) {
                return res.status(400).json({ message: "User already exists" });
            }

            const user = await User.create({
                name,
                email,
                password: hashedPassword,
                role: role || "user" // Set default role to "user" if not provided
            }); 
        

            res.status(201).json({
                message: "User created successfully",
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role
                }
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }

    login = async (req: Request, res: Response) => {
        try {
            const { email, password } = req.body;
            if (!email || !password) {
                return res.status(400).json({ message: "All fields are required" });
            }

            const user = await User.findOne({ email });
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }

            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                return res.status(401).json({ message: "Invalid password" });
            }

            const token = jwt.sign({ id: user._id, email: user.email, role: user.role }, process.env.JWT_SECRET as string, {
                expiresIn: "7d"
            });

            console.log("Generated JWT token:", token, { id: user._id, email: user.email, role: user.role }); // Debugging log

            res.cookie("token", token, {
                httpOnly: true,
                secure: true,
                sameSite: "none",
                maxAge: 7 * 24 * 60 * 60 * 1000
            });

            res.status(200).json({
                message: "Login successful",
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role
                }
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }

    logout = (_req: Request, res: Response) => {
        try {
            res.clearCookie("token");
            res.status(200).json({ message: "logout successfully" });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
}


export default new AuthController;