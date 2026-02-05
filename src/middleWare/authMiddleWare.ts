import jwt from "jsonwebtoken";
import { prisma } from "../../lib/prisma";
import { Request, Response, NextFunction } from "express";

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
var token;

if (req.headers.authorization && req.headers.authorization.startsWith("Bearer ")) {
  token = req.headers.authorization.split(" ")[1];
}else if (req.cookies?.jwt) {
  token = req.cookies.jwt;
}
if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
}
try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    const user = await prisma.user.findUnique({
        where: { id: (decoded as any).id },
    });
    if (!user) {
        return res.status(401).json({ message: "Unauthorized: User not found" });
        
    }
    (req as any).user = user; // Attach user to request object
    next();
    }catch (error) {
    return res.status(401).json({ message: "Unauthorized: Invalid token" });
}
};