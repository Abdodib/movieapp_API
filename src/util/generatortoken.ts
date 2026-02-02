import jwt, { SignOptions } from "jsonwebtoken";

export const generateToken = (userId: string): string => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in .env");
  }

  const payload = { id: userId };

  const options: SignOptions = {
    expiresIn: process.env.JWT_EXPIRES_IN ? parseInt(process.env.JWT_EXPIRES_IN) : 604800,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, options);
  return token;
};


