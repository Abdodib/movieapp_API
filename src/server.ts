import express from 'express';
import { config } from 'dotenv';
import { Connectdb , Disconnectdb } from './dbConnector/db';
import authRoute from './router/authRoute';

const app = express();
const port = 5000;

config();
Connectdb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/auth", authRoute);


const server = app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Handle unhandled promise rejections (e.g., database connection errors)
process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection:", err);
  server.close(async () => {
    await Disconnectdb();
    process.exit(1);
  });
});
// Handle uncaught exceptions
process.on("uncaughtException", async (err) => {
  console.error("Uncaught Exception:", err);
  await Disconnectdb();
  process.exit(1);
});
// Graceful shutdown
process.on("SIGTERM", async () => {
  console.log("SIGTERM received, shutting down gracefully");
  server.close(async () => {
    await Disconnectdb();
    process.exit(0);
  });
});