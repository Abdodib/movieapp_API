import express from "express";
import { addToWatchList, deleteFromWatchList } from "../Controller/watchListController";
import { authMiddleware } from "../middleWare/authMiddleWare";

const router = express.Router();

router.use(authMiddleware);

router.post("/", addToWatchList);

router.delete("/:id" , deleteFromWatchList);

export default router;