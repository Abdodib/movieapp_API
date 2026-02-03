import express from "express";
import { addToWatchList } from "../Controller/watchListCOntroller";

const router = express.Router();

router.post("/", addToWatchList);

export default router;