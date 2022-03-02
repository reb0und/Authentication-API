import httpStatus from "http-status";
import catchAsync from "../utils/catchAsync";

export const help = catchAsync(async (req, res) => {
	res.status(httpStatus.OK).json({
		message: "Welcome to the help page!",
	});
});

export const checkLicense = catchAsync(async (req, res) => {});
export const bindLicense = catchAsync(async (req, res) => {});
export const resetLicense = catchAsync(async (req, res) => {});
export const bindToDevice = catchAsync(async (req, res) => {});
