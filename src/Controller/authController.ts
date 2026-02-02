import { prisma } from "../../lib/prisma";
import bcrypt from "bcryptjs";

export const registerUser = async (req : any, res : any ) => {
    const { name , email , password } = req.body;
    const userExists = await prisma.user.findUnique({ where: { email } });
    if (userExists) {
        return res.status(400).json({ message: "User already exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
        },
    });
    res.status(201).json({ message: "User registered successfully", userId: newUser.id });
}