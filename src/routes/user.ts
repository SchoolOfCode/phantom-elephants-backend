const {getUserById, getAllUsers, addUser, updateUser, deleteUser} : {
    getUserById :any,
    getAllUsers :any
    addUser: any;
    updateUser: any;
    deleteUser: any;} = require('../models/user')


    var express = require('express');
    var userRouter = express.Router();

    // get user by id
    
   userRouter.get("/:id", async (req:any, res:any) => {
    const {id} = req.params.id;
    const data = await getUserById(id);
    res.json({
    success: true,
    message: `Search result for user with id: ${id}`,
    payload: data,});
   });



// get all users 
userRouter.get('/', async (req: any, res: any) => {
    console.log('GET all users');
    const data = await getAllUsers();
    res.json({
      success: true,
      message: 'Here are all users',
      payload: data,
    });
  });
  

// add user by
userRouter.post("/", async (req, res) => {
    const { body } = req;
    const response = await addUser(body);
    res.json({
      success: true,
      message: "User added successfully",
      payload: response,
    });
  });



// update user

userRouter.put("/:user", async (req,res) => {
    const { body } = req;
    const response = await updateUser(body)
    res.json({
      success: true,
      message: "user updated successfully",
      payload: response,
    });
  });


 // delete user

 userRouter.delete("/:user", async (req, res) => {
    const data = await deleteUser;
     res.json({
      success: true,
      message: "User deleted successfully",
      payload: data,
    });
  });

   module.exports = userRouter;