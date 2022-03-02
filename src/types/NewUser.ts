import { Email, License, LicenseTypes, UserMetadata } from "./types";
import LicenseData from "./LicenseData";

export default interface NewUser {
	name?: string;
	email: Email;
	license: License;
	created_at: Date;
	license_type: LicenseTypes;
}
export interface NewLicense {
	license: License;
	created_at: Date;
	updated_at: Date;
	created_by: string;
	email: Email | null;
	license_type: LicenseTypes | "BETA";
	user_metadata: UserMetadata;
	license_data: LicenseData;
}
