import express, { Request, Response } from 'express';
import path from 'path';
import hbs from 'hbs';
import animeRouter from './routers/animeRouter';

const app = express();

// Difine path for express config
const publicDir = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

app.use(express.json());
app.use(express.static(publicDir))

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(animeRouter);

app.get('', (req: Request, res: Response) => {
    res.render('test');
});

app.get('/*', async (req: Request, res: Response) => {
    res.render('404');
})

app.listen(3000, () => console.log('server is up and running...'));