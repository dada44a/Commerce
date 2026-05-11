// middleware/adminMiddleware.ts

import { Request, Response, NextFunction } from "express";


interface JwtPayload {
    id: string;
    email: string;
    role: "admin" | "user";
}

export interface AuthRequest extends Request {
    user?: JwtPayload;
}


// admin-only middleware
export const adminMiddleware = (
    req: AuthRequest,
    res: Response,
    next: NextFunction
) => {
    try {
        // first check if logged in
        if (!req.user) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized",
            });
        }

        // check role
        if (req.user.role !== "admin" ) {
            return res.status(403).json({
                success: false,
                message: "Access denied. Admin only.",
            });
        }

        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server error",
        });
    }
};