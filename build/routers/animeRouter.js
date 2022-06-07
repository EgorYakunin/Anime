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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Anime_1 = require("../models/Anime");
const animeRouter = (0, express_1.Router)();
animeRouter.post('/anime/add', (req, res) => {
    const anime = new Anime_1.Anime(req.body);
    anime.save(anime);
    res.status(200).send();
});
animeRouter.get('/anime', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const anime = yield Anime_1.Anime.getAllAnime();
    res.render('main', { anime });
}));
animeRouter.get('/anime/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield Anime_1.Anime.getAnimeByCounter(req.params.id);
    res.render('anime', { data });
}));
animeRouter.get('/genres/:ganre', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield Anime_1.Anime.getAnimeByGanre(req.params.ganre);
    console.log(data);
    res.render('genres', { anime: data });
}));
animeRouter.get('/anime-random', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield Anime_1.Anime.getRandomAnime();
    res.render('anime', { data });
}));
exports.default = animeRouter;
