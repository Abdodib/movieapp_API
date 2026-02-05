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
    
// fonction to update existing watchList entry (status , rating , notes)

export const updateWatchList = async (req: any, res: any) => {
const { status , rating , notes } = req.body;
const watchListItem = await prisma.watchlistItem.findUnique({
    where: {
        id : req.params.id
    },
});
if (!watchListItem) {
    return res.status(404).json({ message: "Watch list item not found" });
}
if ( watchListItem.userId !== req.user.id) {
    return res.status(403).json({ message: "Forbidden: You can only update your own watch list items" });
}
const updateData : any = {};
if (status !== undefined) updateData.status = status;
if (rating !== undefined) updateData.rating = rating;
if (notes !== undefined)  updateData.notes = notes;

await prisma.watchlistItem.update({
    where: {
        id : req.params.id
    },
    data: updateData
});
res.status(200).json({ message: "Watch list item updated successfully" });
};
//function to delete from watch list

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
    