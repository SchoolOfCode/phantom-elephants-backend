"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const Router = express.Router();
const cors = require('cors');
const bootcamps_1 = require("./routes/bootcamps");
const records_1 = require("./routes/records");
const students_1 = require("./routes/students");
const assignments_1 = require("./routes/assignments");
const userRouter = require('./routes/user');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
// console.log(bootcampRouter);
// console.log(recordRouter);
// console.log(assignmentsRouter);
// console.log(userRouter);
app.use('/bootcamps', bootcamps_1.default);
app.use('/records', records_1.default);
app.use('/assignments', assignments_1.default);
app.use('/user', userRouter);
app.use('/students', students_1.default);
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