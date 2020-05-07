import { Request, Response } from 'express';


import pool from '../database';

class IndexController {

    public async index(req: Request, res: Response) {
        //res.json({text: 'API is in /api/games,'});
        // const games = await pool.query('SELECT cNOMBRE NOMBRE,cLOGO LOGO,tDESCRIPCION DESCRIPCION,cURL URL,cURL_TUTORIAL URL_TUTORIAL, cAREA_ACADEMICA AREA_ACADEMICA FROM BD_BASE_DE_DATOS ORDER BY NOMBRE ASC;');
        const games = await pool.query('SELECT * FROM bd_base_de_datos ORDER BY NOMBRE ASC;');
        res.json(games);
        console.log(res.json(games))
        
    }

}

export const indexController = new IndexController;
