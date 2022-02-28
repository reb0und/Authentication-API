import httpStatus from "http-status";
import catchAsync from "../utils/catchAsync";
import { CreateUser } from "../models/user.model";

export const help = catchAsync(async (req, res) => {
	res.status(httpStatus.OK).json({
		message: "Welcome to the help page!",
	});
});

export const createUser = catchAsync(async (req, res) => {
	CreateUser(req.body.email, req.body.type, req.body.name ? req.body.name : "")
		.then((result) => {
			res.status(httpStatus.CREATED).json({
				result,
			});
		})
		.catch((err) => {
			res.status(httpStatus.BAD_REQUEST).json({
				message: err.message,
			});
		});
	// create user here
});
