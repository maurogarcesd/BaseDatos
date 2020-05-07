"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const basesController_1 = __importDefault(require("../controllers/basesController"));
class basesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', basesController_1.default.list);
        this.router.get('/area/:area', basesController_1.default.getArea);
        this.router.get('/tipo/:tipo', basesController_1.default.getTipo);
    }
}
exports.default = new basesRoutes().router;
