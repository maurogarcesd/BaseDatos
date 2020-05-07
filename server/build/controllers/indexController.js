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
const database_1 = __importDefault(require("../database"));
class IndexController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //res.json({text: 'API is in /api/games,'});
            // const games = await pool.query('SELECT cNOMBRE NOMBRE,cLOGO LOGO,tDESCRIPCION DESCRIPCION,cURL URL,cURL_TUTORIAL URL_TUTORIAL, cAREA_ACADEMICA AREA_ACADEMICA FROM BD_BASE_DE_DATOS ORDER BY NOMBRE ASC;');
            const games = yield database_1.default.query('SELECT * FROM bd_base_de_datos ORDER BY NOMBRE ASC;');
            res.json(games);
            console.log(res.json(games));
        });
    }
}
exports.indexController = new IndexController;
