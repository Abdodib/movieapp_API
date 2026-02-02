import { prisma } from '../../lib/prisma';
const Connectdb = async () =>{
    try {
        await prisma.$connect();
        console.log("Connected to database");
    } catch (error) {
        console.error("Error connecting to database:", error);
        throw error;
    }
}
const Disconnectdb = async () =>{
    try {
        await prisma.$disconnect();
        console.log("Disconnected from database");
    } catch (error) {
        console.error("Error disconnecting from database:", error);
        throw error;
    }
}
export {Connectdb,Disconnectdb}