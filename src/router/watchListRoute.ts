import express from "express";
import { addToWatchList, deleteFromWatchList, updateWatchList } from "../Controller/watchListController";
import { authMiddleware } from "../middleWare/authMiddleWare";

const router = express.Router();

router.use(authMiddleware);

router.post("/", addToWatchList);

router.delete("/:id" , deleteFromWatchList);

router.put("/:id" , updateWatchList);

export default router;