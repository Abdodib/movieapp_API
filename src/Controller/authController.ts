import { prisma } from "../../lib/prisma";
import bcrypt from "bcryptjs";
import { generateToken } from "../util/generatortoken";

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

    const token = generateToken(newUser.id);
    res.status(201).json({ message: "User registered successfully", userId: newUser.id , token });

}

export const loginUser = async (req : any, res : any ) => {
    const { email , password } = req.body;
    const validEmail = await prisma.user.findUnique({ where: { email } });
    if (!validEmail) {
        return res.status(400).json({ message: "Invalid email or password" });
    }
    const isPasswordValid = await bcrypt.compare(password, validEmail.password);
    if (!isPasswordValid) {
        return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = generateToken(validEmail.id);
    res.status(200).json({ message: "Login successful", token });
}