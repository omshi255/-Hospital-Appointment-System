import express from "express";
import {
    createUser, getUsers, updateUser, deleteUser, Login, logout , getProfile
} from "../controller/User.controller.js";
import { authenticateToken } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/register", createUser);
router.post("/login", Login);
router.post("/logout", logout);

router.get("/users", authenticateToken, getUsers);
router.put("/users/:id", authenticateToken, updateUser);
router.delete("/users/:id", authenticateToken, deleteUser);
router.get("/profile", authenticateToken, getProfile);


export default router;
