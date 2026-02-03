import { prisma } from "../../lib/prisma";

export const addToWatchList = async (req: any, res: any) => {
    const { userId , movieId , status , rating , notes } = req.body;

    const movieExist = await prisma.movie.findUnique({
        where: {
            id : movieId
        }
    });
    
    const movieInList = await prisma.watchlistItem.findUnique({
        where: {
            userId_movieId: {
                userId : userId,
                movieId : movieId
            }
        }
    });

    if (!movieExist) {
        return res.status(404).json({ message: "Movie not found" });
    }
    if (movieInList) {
        return res.status(400).json({ message: "Movie already in watch list" });
    }

    const newWatchListEntry = await prisma.watchlistItem.create({
        data : {
            userId,
            movieId,
            status: status || "PLANNED",
            rating,
            notes,
        }
    });
    res.status(201).json({ message: "Movie added to watch list", watchListEntry: newWatchListEntry });
        }
    