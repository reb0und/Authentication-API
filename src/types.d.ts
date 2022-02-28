export type license = `MINTY-${string}-${string}-${string}`;

export type email = `${string}@${string}.${string}`;

export type licenseTypes =
	| 'developer'
	| 'renewal'
	| 'monthly'
	| 'weekly'
	| 'lifetime'
	| 'fnf'
	| 'staff'
	| 'administrator'
	| 'owner';

export interface User {
	id: number;
	name: string;
	email: email;
	created_at: Date;
	updated_at: Date;
	license: license;
	license_type: licenseTypes;
	metadata: UserMetadata;
}

export interface UserCreate {
	name: string;
	email: email;
	license: license;
	created_at: Date;
}

export interface UserMetadata {
	hwid: string;
	ip: string;
	last_opened: Date;
}
