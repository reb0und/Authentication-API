import { Email, License, LicenseTypes, UserMetadata } from "./types";

export default interface User {
	id: number;
	name: string;
	email: Email;
	created_at: Date;
	updated_at: Date;
	license: License;
	license_type: LicenseTypes;
	metadata: UserMetadata;
}
