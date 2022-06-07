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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const hbs_1 = __importDefault(require("hbs"));
const animeRouter_1 = __importDefault(require("./routers/animeRouter"));
const app = (0, express_1.default)();
// Difine path for express config
const publicDir = path_1.default.join(__dirname, '../public');
const viewsPath = path_1.default.join(__dirname, '../templates/views');
const partialsPath = path_1.default.join(__dirname, '../templates/partials');
app.use(express_1.default.json());
app.use(express_1.default.static(publicDir));
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs_1.default.registerPartials(partialsPath);
app.use(animeRouter_1.default);
app.get('', (req, res) => {
    res.redirect('/anime');
    // res.render('Genres');
});
app.get('/*', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.render('404');
}));
app.listen(3000, () => console.log('server is up and running...'));
