import express from "express";
const router = express.Router();


import { deleteUser, getUser, getUsers, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

router.get("/checkauthentication",verifyToken,(req,res)=>{
    res.send("Hello user you are logged in ");
})


//UPDATE
router.put("/:id",verifyUser, updateUser);

//DELETE
router.delete("/:id",verifyUser, deleteUser);

//GET
router.get("/:id",verifyUser, getUser);

//GET ALL
router.get("/", verifyAdmin, getUsers);

export default router ;