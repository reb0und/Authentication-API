import { Schema, model, connect } from "mongoose";
import crypto from "crypto";
import httpStatus from "http-status";

import NewUser from "../types/NewUser";
import ApiError from "../utils/ApiError";
import { Email, License, LicenseTypes } from "../types/types";

require("dotenv").config();

const schema = new Schema<NewUser>({
	name: { type: String, required: false },
	email: { type: String, required: true },
	license: { type: String, required: true },
	created_at: { type: Date, required: true },
	license_type: { type: String, required: true },
});

const UserModel = model<NewUser>("User", schema);

const createLicense = (): License => {
	return `MINTY-${crypto.randomBytes(4).toString("hex").toUpperCase()}-${crypto
		.randomBytes(4)
		.toString("hex")
		.toUpperCase()}-${crypto.randomBytes(4).toString("hex").toUpperCase()}`;
};

const getUserByEmail = async (email) => {
	return UserModel.findOne({ email });
};

export async function CreateUser(
	email: Email,
	licenseType: LicenseTypes,
	name?: string
): Promise<any> {
	await connect(process.env.MONGO_URI!);

	const emailExists = await getUserByEmail(email);
	if (emailExists) {
		throw new ApiError(httpStatus.BAD_REQUEST, "Email alread exists");
	} else {
		const user = new UserModel({
			name: name ? name : null,
			email: email,
			license: createLicense(),
			license_type: licenseType,
			created_at: new Date(),
		}).save();
		return user;
	}
}

export default UserModel;
