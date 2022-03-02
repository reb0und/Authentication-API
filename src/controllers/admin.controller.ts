import httpStatus from "http-status";
import catchAsync from "../utils/catchAsync";
import { CreateUser } from "../models/user.model";
import { CreateLicense } from "../models/license.model";
import LicenseArgs from "../types/LicenseArgs";

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

export const createLicense = catchAsync(async (req, res) => {
	CreateLicense({
		createdBy: req.headers["x-authorization"],
		email: req.body.email ? req.body.email : null,
		licenseType: req.body.licenseType ? req.body.licenseType : "BETA",
		name: req.body.name ? req.body.name : null,
		instance_count: req.body.instanceCount ? req.body.instanceCount : 1,
	})
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

export const banUser = catchAsync(async (req, res) => {});
export const suspendUser = catchAsync(async (req, res) => {});
export const updateUser = catchAsync(async (req, res) => {});
