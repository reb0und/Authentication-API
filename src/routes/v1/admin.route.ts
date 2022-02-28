import express from "express";
import { adminController } from "../../controllers";

const router = express.Router();

router.get("/help", adminController.help);
router.post("/create-user", adminController.createUser);

export default router;
