import express, { Router } from 'express';

import basesController from '../controllers/basesController';

class basesRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
         this.router.get('/', basesController.list);
         this.router.get('/area/:area', basesController.getArea);
         this.router.get('/tipo/:tipo', basesController.getTipo);
    }   

}

export default new basesRoutes().router;