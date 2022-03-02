import { model, connect } from "mongoose";
import crypto from "crypto";
import httpStatus from "http-status";

import { NewLicense } from "../types/NewUser";
import ApiError from "../utils/ApiError";
import { Email, License, LicenseTypes } from "../types/types";
import LicenseArgs from "../types/LicenseArgs";
import { LicenseSchema } from "./schemas";

require("dotenv").config();

const UserModel = model<NewLicense>("User2", LicenseSchema);

const createLicense = (): License => {
	return `MINTY-${crypto.randomBytes(4).toString("hex").toUpperCase()}-${crypto
		.randomBytes(4)
		.toString("hex")
		.toUpperCase()}-${crypto.randomBytes(4).toString("hex").toUpperCase()}`;
};

const checkForEmail = async (email: Email) => {
	return UserModel.findOne({ email });
};

function checkLicense() {
	const generatedLicense = createLicense();
	return new Promise<any>((resolve) => {
		resolve(UserModel.findOne({ license: generatedLicense }));
	}).then((result) => {
		if (result) {
			return checkLicense();
		} else {
			return generatedLicense;
		}
	});
}

export async function CreateLicense(args: LicenseArgs): Promise<any> {
	await connect(process.env.MONGO_URI!);

	const license = await checkLicense();
	const emailAvailability = args.email
		? await checkForEmail(args.email)
		: false;
	if (emailAvailability) {
		throw new ApiError(httpStatus.BAD_REQUEST, "Email already exists");
	} else {
		const user = new UserModel<NewLicense>({
			license: license,
			created_at: new Date(),
			updated_at: new Date(),
			email: args.email ? args.email : null,
			created_by: args.createdBy,
			license_type: args.licenseType ? args.licenseType : "BETA",
			user_metadata: {
				name: args.name ? args.name : null,
				hw_id: null,
				ip: null,
				last_opened: null,
			},
			license_data: {
				isBound: false,
				isExpired: false,
				isSuspended: false,
				isCancelled: false,
				isBanned: false,
				isActive: false,
				last_reset: null,
				reset_count: 0,
				instance_count: args.instance_count ? args.instance_count : 1,
			},
		}).save();
		return user;
	}
}

export default UserModel;
