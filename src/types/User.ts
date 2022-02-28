import { Email, License, LicenseTypes } from "./types";
import UserMetadata from "./UserMetadata";

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
