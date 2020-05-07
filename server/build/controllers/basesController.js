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
class BasesController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const games = yield database_1.default.query('SELECT cNOMBRE NOMBRE,cLOGO LOGO,tDESCRIPCION DESCRIPCION,cURL URL,cURL_TUTORIAL URL_TUTORIAL, cAREA_ACADEMICA AREA_ACADEMICA, eTIPO_RECURSO TIPO_RECURSO FROM BD_BASE_DE_DATOS ORDER BY cNOMBRE ASC;');
            //const games = await pool.query('SELECT * FROM bd_base_de_datos ORDER BY cNOMBRE ASC;');
            if (games.length > 0) {
                return res.json(games);
            }
            res.status(404).json({ text: "No hay resultados" });
        });
    }
    getArea(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { area } = req.params;
            //var area = "Ciencias de la salud";
            const games = yield database_1.default.query('SELECT * FROM bd_base_de_datos WHERE cArea_academica = ?;', area);
            console.log(games.length);
            // console.log(query);
            if (games.length > 0) {
                return res.json(games);
            }
            res.status(404).json({ text: "No hay resultados" });
        });
    }
    getTipo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { tipo } = req.params;
            //var area = "Ciencias de la salud";
            const games = yield database_1.default.query('SELECT * FROM bd_base_de_datos WHERE eTipo_recurso = ?;', tipo);
            console.log(games.length);
            // console.log(query);
            if (games.length > 0) {
                return res.json(games);
            }
            res.status(404).json({ text: "No hay resultados" });
        });
    }
}
const basesController = new BasesController;
exports.default = basesController;
