"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
//Creates and configures an ExpressJS web server.
class App {
    constructor() {
        this.express = express();
        this.configureMiddleware();
        this.configureRoutes();
    }
    configureMiddleware() {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }
    configureRoutes() {
        let router = express.Router();
        router.get('/', (req, res, next) => {
            res.json({ nessage: 'Hello Word!' });
        });
        this.express.use('/', router);
    }
}
exports.default = new App().express;
