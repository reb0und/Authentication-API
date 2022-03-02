import { Schema } from "mongoose";
import { UserMetadata } from "../types/types";
import { NewLicense } from "../types/NewUser";
import LicenseData from "../types/LicenseData";

export const UserMetadataSchema = new Schema<UserMetadata>({
	name: { type: String, required: false, default: null },
	hw_id: { type: String, required: false, default: "" },
	ip: { type: String, required: false, default: "" },
	last_opened: { type: Date, required: false, default: null },
});

export const LicenseData = new Schema<LicenseData>({
	isBound: { type: Boolean, required: true, default: false },
	isExpired: { type: Boolean, required: true, default: false },
	isSuspended: { type: Boolean, required: true, default: false },
	isCancelled: { type: Boolean, required: true, default: false },
	isBanned: { type: Boolean, required: true, default: false },
	isActive: { type: Boolean, required: true, default: false },
	last_reset: { type: Date, required: false, default: null },
	reset_count: { type: Number, required: true, default: 0 },
	instance_count: { type: Number, required: true, default: 1 },
});

export const LicenseSchema = new Schema<NewLicense>({
	license: { type: String, required: true },
	created_at: { type: Date, required: true },
	updated_at: { type: Date, required: false },
	email: { type: String, required: false, default: null },
	created_by: { type: String, required: true },
	license_type: { type: String, required: true, default: "BETA" },
	user_metadata: { type: UserMetadataSchema, required: false },
	license_data: { type: LicenseData, required: true },
});
