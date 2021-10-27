"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
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
exports.default = app;
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
//# sourceMappingURL=app.js.map