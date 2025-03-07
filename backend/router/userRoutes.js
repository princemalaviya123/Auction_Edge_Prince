import express from "express"
import { fetchleaderboad, getProfile, login, register, logout } from "../controllers/userController.js"
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/me", isAuthenticated, getProfile);
router.get("/logout", logout);
router.get("/leaderboard", fetchleaderboad);


export default router;
