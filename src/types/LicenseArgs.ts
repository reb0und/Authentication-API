import { Email, LicenseTypes } from "./types";

export default interface LicenseArgs {
	createdBy: string;
	email: Email;
	licenseType: LicenseTypes;
	name: string;
	instance_count: number;
}
