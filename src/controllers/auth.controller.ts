import httpStatus from "http-status";
import catchAsync from "../utils/catchAsync";

export const help = catchAsync(async (req, res) => {
	res.status(httpStatus.OK).json({
		message: "Welcome to the help page!",
	});
});
