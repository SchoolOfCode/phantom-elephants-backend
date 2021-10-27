import * as express from 'express';

const bootcampRouter = require('./routes/bootcamps');
class App {
  public express;

  constructor() {
    this.express = express();
    this.mountRoutes();
  }

  private mountRoutes(): void {
    const router = express.Router();
    router.get('/', (req, res) => {
      res.json({ message: 'Go away, world!' });
    });
    
    this.express.use('/bootcamps', bootcampRouter);
    
    this.express.use('/', router);
  }
}

export default new App().express;
