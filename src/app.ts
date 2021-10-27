import * as express from 'express';
const cors = require('cors');

const bootcampRouter = require('./routes/bootcamps');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: '*' }));

app.use('/bootcamps', bootcampRouter);

app.get('/', (req, res) => {
  res.json({ message: 'Go away, world!' });
});

export default app;
// class App {
//   public express;

//   constructor() {
//     this.express = express();
//     this.mountRoutes();
//   }

//   private mountRoutes(): void {
//     const router = express.Router();
//     router.get('/', (req, res) => {
//       res.json({ message: 'Go away, world!' });
//     });

//     this.express.use('/bootcamps', bootcampRouter);

//     this.express.use('/', router);
//   }
// }

// export default new App().express;
