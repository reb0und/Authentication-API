import { email, license, licenseTypes } from "./types";
import UserMetadata from "./UserMetadata";

export default interface User {
	id: number;
	name: string;
	email: email;
	created_at: Date;
	updated_at: Date;
	license: license;
	license_type: licenseTypes;
	metadata: UserMetadata;
}
