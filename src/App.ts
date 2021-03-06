import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';

//Creates and configures an ExpressJS web server.
class App {
    public express: express.Application;

    constructor() {
        this.express = express();
        this.configureMiddleware();
        this.configureRoutes();
    }

    private configureMiddleware(): void {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded( {extended: false} ));
    }

    private configureRoutes(): void {
        let router = express.Router();
        router.get('/', (req, res, next) => {
            res.json({ message: 'Hello World!' });
        });
        this.express.use('/', router);
    }
}

export default new App().express;