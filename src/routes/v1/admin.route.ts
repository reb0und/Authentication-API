import express from "express";
import { adminController } from "../../controllers";

const router = express.Router();

router.get("/help", adminController.help);
router.post("/create-user", adminController.createLicense);
router.post("/ban-user", adminController.banUser);
router.post("/suspend-user", adminController.suspendUser);
router.post("/update-user", adminController.updateUser);

export default router;
