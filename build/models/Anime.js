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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Anime = void 0;
const DB_controller_1 = require("../controllers/DB_controller");
class Anime {
    constructor(data) {
        this.save = (data) => {
            DB_controller_1.db.write_one('anime', data);
        };
        this.counter = data.counter;
        this.title = data.title;
        this.otherNames = data.otherNames;
        this.type = data.type;
        this.episodes = data.episodes;
        this.status = data.status;
        this.ganres = data.ganres;
        this.origin = data.origin;
        this.season = data.origin;
        this.released = data.released;
        this.studio = data.studio;
        this.rating = data.rating;
        this.ageLimits = data.ageLimits;
        this.duration = data.duration;
        this.voiceActing = data.voiceActing;
        this.manga = data.manga;
        this.mainCaracters = data.mainCaracters;
        this.description = data.description;
    }
}
exports.Anime = Anime;
_a = Anime;
Anime.getAllAnime = () => __awaiter(void 0, void 0, void 0, function* () {
    const returnValue = yield DB_controller_1.db.read_many('anime', {});
    return returnValue;
});
Anime.getAnimeByID = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const anime = yield DB_controller_1.db.read_one('anime', { _id: id });
    return anime;
});
Anime.getAnimeByCounter = (counter) => __awaiter(void 0, void 0, void 0, function* () {
    const returnValue = yield DB_controller_1.db.read_one('anime', { counter: counter });
    return returnValue;
});
Anime.getAnimeByGanre = (ganre) => __awaiter(void 0, void 0, void 0, function* () {
    const allAnime = yield DB_controller_1.db.read_many('anime', {});
    let returnValue = [];
    allAnime === null || allAnime === void 0 ? void 0 : allAnime.forEach((e) => {
        if (e.ganres.includes(ganre))
            returnValue.push(e);
    });
    return returnValue;
});
Anime.getRandomAnime = () => __awaiter(void 0, void 0, void 0, function* () {
    // 0 --> 4
    const randomNumber = Math.floor(Math.random() * 16) + 1 + '';
    const returnValue = yield DB_controller_1.db.read_one('anime', { counter: randomNumber });
    return returnValue;
});
