import { email, license } from "./types";

export default interface UserCreate {
	name: string;
	email: email;
	license: license;
	created_at: Date;
}
