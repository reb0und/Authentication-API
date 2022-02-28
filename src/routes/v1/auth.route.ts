import express from "express";
import { authController } from "../../controllers";

const router = express.Router();

router.get("/help", authController.help);

export default router;
