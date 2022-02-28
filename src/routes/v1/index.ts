import express from "express";
import authRoute from "./auth.route";
import userRoute from "./user.route";
import adminRoute from "./admin.route";

const router = express.Router();

const productionRoutes: Array<{ path: string; route: any }> = [
	{
		path: "/auth",
		route: authRoute,
	},
	{
		path: "/users",
		route: userRoute,
	},
	{
		path: "/admin",
		route: adminRoute,
	},
];

productionRoutes.forEach((route) => {
	router.use(route.path, route.route);
});

export default router;
