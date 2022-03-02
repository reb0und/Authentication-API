import express from "express";
import { authController } from "../../controllers";

const router = express.Router();

router.get("/help", authController.help);
router.post("/check-license", authController.checkLicense);
router.post("/bind-license", authController.bindLicense);
router.post("/reset-license", authController.resetLicense);
router.post("/bind-to-device", authController.bindToDevice);

export default router;
