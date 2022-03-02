import httpStatus from "http-status";
import catchAsync from "../utils/catchAsync";

export const license = catchAsync(async (req, res) => {
	res.status(httpStatus.OK).json({
		message: "Welcome to the help page!",
	});
});

export const getUser = catchAsync(async (req, res) => {});
