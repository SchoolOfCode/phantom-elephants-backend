var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { getUserById, getAllUsers, addUser, updateUser, deleteUser } = require('../models/user');
var express = require('express');
var userRouter = express.Router();
// get user by id
userRouter.get("/:id", (req, res) => __awaiter(this, void 0, void 0, function* () {
    const { id } = req.params.id;
    const data = yield getUserById(id);
    res.json({
        success: true,
        message: `Search result for user with id: ${id}`,
        payload: data,
    });
}));
// get all users 
userRouter.get('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    console.log('GET all users');
    const data = yield getAllUsers();
    res.json({
        success: true,
        message: 'Here are all users',
        payload: data,
    });
}));
// add user by
userRouter.post("/", (req, res) => __awaiter(this, void 0, void 0, function* () {
    const { body } = req;
    const response = yield addUser(body);
    res.json({
        success: true,
        message: "User added successfully",
        payload: response,
    });
}));
// update user
userRouter.put("/", (req, res) => __awaiter(this, void 0, void 0, function* () {
    const { body } = req;
    const response = yield updateUser(body);
    res.json({
        success: true,
        message: "user updated successfully",
        payload: response,
    });
}));
// delete user
userRouter.delete("/", (req, res) => __awaiter(this, void 0, void 0, function* () {
    const data = yield deleteUser;
    res.json({
        success: true,
        message: "User deleted successfully",
        payload: data,
    });
}));
module.exports = userRouter;
//# sourceMappingURL=user.js.map