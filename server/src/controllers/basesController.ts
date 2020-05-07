import { Request, Response, query } from 'express';


import pool from '../database';

class BasesController {

    public async list(req: Request, res: Response): Promise<any> {
        const games = await pool.query('SELECT cNOMBRE NOMBRE,cLOGO LOGO,tDESCRIPCION DESCRIPCION,cURL URL,cURL_TUTORIAL URL_TUTORIAL, cAREA_ACADEMICA AREA_ACADEMICA, eTIPO_RECURSO TIPO_RECURSO FROM BD_BASE_DE_DATOS ORDER BY cNOMBRE ASC;');
        //const games = await pool.query('SELECT * FROM bd_base_de_datos ORDER BY cNOMBRE ASC;');
        if (games.length > 0) {
            return res.json(games);
        }
        res.status(404).json({ text: "No hay resultados" });
    }


    public async getArea(req: Request, res: Response): Promise<any> {
        const { area } = req.params;
        //var area = "Ciencias de la salud";
        const games = await pool.query('SELECT * FROM bd_base_de_datos WHERE cArea_academica = ?;', area);
        console.log(games.length);
       // console.log(query);
        if (games.length > 0) {
            return res.json(games);
        }
        res.status(404).json({ text: "No hay resultados" });
    }

    public async getTipo(req: Request, res: Response): Promise<any> {
        const { tipo } = req.params;
        //var area = "Ciencias de la salud";
        const games = await pool.query('SELECT * FROM bd_base_de_datos WHERE eTipo_recurso = ?;', tipo);
        console.log(games.length);
       // console.log(query);
        if (games.length > 0) {
            return res.json(games);
        }
        res.status(404).json({ text: "No hay resultados" });
    }
    

   
}

const basesController = new BasesController;
export default basesController;