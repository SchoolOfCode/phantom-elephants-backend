import * as express from 'express';
import { response } from 'express';
const Router = express.Router();
const cors = require('cors');

import bootcampRouter from './routes/bootcamps';
import recordRouter from './routes/records';
import studentRouter from './routes/students';
import assignmentsRouter from './routes/assignments';
const userRouter = require('./routes/user');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// console.log(bootcampRouter);
// console.log(recordRouter);
// console.log(assignmentsRouter);
// console.log(userRouter);

app.use('/bootcamps', bootcampRouter);
app.use('/records', recordRouter);
app.use('/assignments', assignmentsRouter);
app.use('/user', userRouter);
app.use('/students', studentRouter);

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
