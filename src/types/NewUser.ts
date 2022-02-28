import { Email, License, LicenseTypes } from "./types";

export default interface NewUser {
	name?: string;
	email: Email;
	license: License;
	created_at: Date;
	license_type: LicenseTypes;
}
