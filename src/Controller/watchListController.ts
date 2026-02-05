import { prisma } from "../../lib/prisma";

export const addToWatchList = async (req: any, res: any) => {
    const { movieId , status , rating , notes } = req.body;

    const movieExist = await prisma.movie.findUnique({
        where: {
            id : movieId
        }
    });
    
    const movieInList = await prisma.watchlistItem.findUnique({
        where: {
            userId_movieId: {
                userId : req.user.id,
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
            userId : req.user.id,
            movieId,
            status: status || "PLANNED",
            rating,
            notes,
        }
    });
    res.status(201).json({ message: "Movie added to watch list", watchListEntry: newWatchListEntry });
        };
    
export const deleteFromWatchList = async (req: any, res: any) => {
const watchListItem = await prisma.watchlistItem.findUnique({
    where: {
        id : req.params.id
    },
});
if (!watchListItem) {
    return res.status(404).json({ message: "Watch list item not found" });
}
if ( watchListItem.userId !== req.user.id) {
    return res.status(403).json({ message: "Forbidden: You can only delete your own watch list items" });
}
await prisma.watchlistItem.delete({
    where: {
        id : req.params.id
    },
});
res.status(200).json({ message: "Movie removed from watch list" }); 
};
    