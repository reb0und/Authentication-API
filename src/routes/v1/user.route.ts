import express from "express";
import { userController } from "../../controllers";

const router = express.Router();

router.get("/data", userController.license);

export default router;
