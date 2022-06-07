import { ObjectId } from "bson";
import { WithId } from "mongodb";
import { db } from "../controllers/DB_controller";

interface Anim {
    counter: number;
    title: string;
    otherNames: string[];
    type: string;
    episodes: number;
    status: string;
    ganres: string[];
    origin: string;
    season: string;
    released: string;
    studio?: string;
    rating?: string;
    ageLimits: number;
    duration: number;
    voiceActing?: string[];
    manga: string;
    mainCaracters?: string[];
    description: string;
}

class Anime implements Anim {
    counter;
    title;
    otherNames;
    type;
    episodes;
    status;
    ganres;
    origin;
    season;
    released;
    studio;
    rating;
    ageLimits;
    duration;
    voiceActing;
    manga;
    mainCaracters;
    description;

    constructor(data: Anim) {
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

    save = (data: Anim) => {
        db.write_one('anime', data);
    }

    static getAllAnime = async () => {
        const returnValue = await db.read_many('anime', {});
        return returnValue;
    }

    static getAnimeByID = async (id: ObjectId) => {
        const anime = await db.read_one('anime', {_id: id});
        return anime;
    }
    
    static getAnimeByCounter = async (counter: string) => {
        const returnValue = await db.read_one('anime', { counter: counter });
        return returnValue;
    }

    static getAnimeByGanre = async (ganre: string) => {
        const allAnime = await db.read_many('anime', {});
        
        let returnValue: any = [];
        allAnime?.forEach((e) => {
            if(e.ganres.includes(ganre))
                returnValue.push(e);
        });

        return returnValue;
    }

    static getRandomAnime = async () => {
        // 0 --> 4
        const randomNumber: string = Math.floor(Math.random() * 16) + 1 + '';

        const returnValue = await db.read_one('anime', { counter: randomNumber });
        return returnValue;
    }

}

export { Anime }