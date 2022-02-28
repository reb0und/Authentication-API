import httpStatus from "http-status";
import catchAsync from "../utils/catchAsync";

export const license = catchAsync(async (req, res) => {
	console.log(req.query["license"]);
	res.status(httpStatus.OK).json({
		message: "Welcome to the help page!",
	});
});
