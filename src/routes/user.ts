const {
  getUserById,
  getAllUsers,
  addUser,
  updateUser,
  deleteUser,
}: {
  getUserById: (id: string) => Promise<any>;
  getAllUsers: () => Promise<Array<any>>;
  addUser: ({ user }: { user: Record<string, any> }) => Promise<any>;
  updateUser: ({
    user,
    id,
  }: {
    user: Record<string, any>;
    id: number;
  }) => Promise<any>;
  deleteUser: (id: string) => Promise<Array<any>>;
} = require('../models/user');

import * as express from 'express';
const userRouter = express.Router();

//     // get user by id

//    userRouter.get("/:id", async (req:any, res:any) => {
//     const {id} = req.params.id;
//     const data = await getUserById(id);
//     res.json({
//     success: true,
//     message: `Search result for user with id: ${id}`,
//     payload: data,});
//    });

// // get all users
// userRouter.get('/', async (req: any, res: any) => {
//     console.log('GET all users');
//     const data = await getAllUsers();
//     res.json({
//       success: true,
//       message: 'Here are all users',
//       payload: data,
//     });
//   });

// // add user by
// userRouter.post("/", async (req, res) => {
//     const { body } = req;
//     const response = await addUser(body);
//     res.json({
//       success: true,
//       message: "User added successfully",
//       payload: response,
//     });
//   });

// // update user

// userRouter.put("/", async (req,res) => {
//     const { body } = req;
//     const response = await updateUser(body)
//     res.json({
//       success: true,
//       message: "user updated successfully",
//       payload: response,
//     });
//   });

//  // delete user

//  userRouter.delete("/", async (req, res) => {
//     const data = await deleteUser;
//      res.json({
//       success: true,
//       message: "User deleted successfully",
//       payload: data,
//     });
//   });

module.exports = userRouter;
