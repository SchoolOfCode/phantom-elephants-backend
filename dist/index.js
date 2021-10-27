"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const port = process.env.PORT || 3000;
app_1.default.listen(port, () => {
    console.log(`Server is listening on port ${port}.`);
    return;
});
//# sourceMappingURL=index.js.map