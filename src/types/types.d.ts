export type License = `MINTY-${string}-${string}-${string}`;

export type Email = `${string}@${string}.${string}`;

export type LicenseTypes =
	| "DEV"
	| "RENEWAL"
	| "MONTHLY"
	| "WEEKLY"
	| "LIFETIME"
	| "FNF"
	| "STAFF"
	| "ADMIN"
	| "OWNER"
	| "BETA";

export type LicenseStatus =
	| "ACTIVE"
	| "INACTIVE"
	| "EXPIRED"
	| "SUSPENDED"
	| "CANCELLED"
	| "BANNED"
	| "UNBOUND";

export type UserMetadata = {
	name: string | null;
	hw_id: string | null;
	ip: string | null;
	last_opened: Date | null;
};
