"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_1 = require("../lib/prisma");
var userId = "879e684f-7fc6-41f0-b239-1003d27ab9da";
var movies = [
    {
        title: "The Matrix",
        overview: "A computer hacker learns about the true nature of reality.",
        releaseYear: 1999,
        genres: ["Action", "Sci-Fi"],
        runtime: 136,
        posterUrl: "https://example.com/matrix.jpg",
        createdBy: userId,
    },
    {
        title: "Inception",
        overview: "A thief who steals corporate secrets through dream-sharing technology.",
        releaseYear: 2010,
        genres: ["Action", "Sci-Fi", "Thriller"],
        runtime: 148,
        posterUrl: "https://example.com/inception.jpg",
        createdBy: userId,
    },
    {
        title: "The Dark Knight",
        overview: "Batman faces the Joker in a battle for Gotham's soul.",
        releaseYear: 2008,
        genres: ["Action", "Crime", "Drama"],
        runtime: 152,
        posterUrl: "https://example.com/darkknight.jpg",
        createdBy: userId,
    },
    {
        title: "Pulp Fiction",
        overview: "The lives of two mob hitmen, a boxer, and others intertwine.",
        releaseYear: 1994,
        genres: ["Crime", "Drama"],
        runtime: 154,
        posterUrl: "https://example.com/pulpfiction.jpg",
        createdBy: userId,
    },
    {
        title: "Interstellar",
        overview: "A team of explorers travel through a wormhole in space.",
        releaseYear: 2014,
        genres: ["Adventure", "Drama", "Sci-Fi"],
        runtime: 169,
        posterUrl: "https://example.com/interstellar.jpg",
        createdBy: userId,
    },
    {
        title: "The Shawshank Redemption",
        overview: "Two imprisoned men bond over a number of years.",
        releaseYear: 1994,
        genres: ["Drama"],
        runtime: 142,
        posterUrl: "https://example.com/shawshank.jpg",
        createdBy: userId,
    },
    {
        title: "Fight Club",
        overview: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club.",
        releaseYear: 1999,
        genres: ["Drama"],
        runtime: 139,
        posterUrl: "https://example.com/fightclub.jpg",
        createdBy: userId,
    },
    {
        title: "Forrest Gump",
        overview: "The presidencies of Kennedy and Johnson unfold through the perspective of an Alabama man.",
        releaseYear: 1994,
        genres: ["Drama", "Romance"],
        runtime: 142,
        posterUrl: "https://example.com/forrestgump.jpg",
        createdBy: userId,
    },
    {
        title: "The Godfather",
        overview: "The aging patriarch of an organized crime dynasty transfers control to his son.",
        releaseYear: 1972,
        genres: ["Crime", "Drama"],
        runtime: 175,
        posterUrl: "https://example.com/godfather.jpg",
        createdBy: userId,
    },
    {
        title: "Goodfellas",
        overview: "The story of Henry Hill and his life in the mob.",
        releaseYear: 1990,
        genres: ["Biography", "Crime", "Drama"],
        runtime: 146,
        posterUrl: "https://example.com/goodfellas.jpg",
        createdBy: userId,
    },
];
var main = function () { return __awaiter(void 0, void 0, void 0, function () {
    var _i, movies_1, movie;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("Seeding movies...");
                _i = 0, movies_1 = movies;
                _a.label = 1;
            case 1:
                if (!(_i < movies_1.length)) return [3 /*break*/, 4];
                movie = movies_1[_i];
                return [4 /*yield*/, prisma_1.prisma.movie.create({
                        data: movie,
                    })];
            case 2:
                _a.sent();
                console.log("Created movie: ".concat(movie.title));
                _a.label = 3;
            case 3:
                _i++;
                return [3 /*break*/, 1];
            case 4:
                console.log("Seeding completed!");
                return [2 /*return*/];
        }
    });
}); };
main()
    .catch(function (err) {
    console.error(err);
    process.exit(1);
})
    .finally(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma_1.prisma.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
