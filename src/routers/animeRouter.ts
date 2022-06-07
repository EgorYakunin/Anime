import { Router, Request, Response } from 'express';
import { Anime } from '../models/Anime';

const animeRouter = Router();

animeRouter.post('/anime/add', (req: Request, res: Response) => {
    const anime = new Anime(req.body);

    anime.save(anime);
    res.status(200).send();
})

animeRouter.get('/anime', async (req: Request, res: Response) => {
    const anime = await Anime.getAllAnime();

    res.render('main', {anime});
})

animeRouter.get('/anime/:id', async (req: Request, res: Response) => {
    const data = await Anime.getAnimeByCounter(req.params.id);

    res.render('anime', { data });
});

animeRouter.get('/genres/:ganre', async (req: Request, res: Response) => {
    const data = await Anime.getAnimeByGanre(req.params.ganre);


    res.render('genres', { anime: data });
});

animeRouter.get('/anime-random', async (req: Request, res: Response) => {
    const data = await Anime.getRandomAnime();
    
    res.render('anime', { data });
});

export default animeRouter;