export type License = `MINTY-${string}-${string}-${string}`;

export type Email = `${string}@${string}.${string}`;

export type LicenseTypes =
	| "developer"
	| "renewal"
	| "monthly"
	| "weekly"
	| "lifetime"
	| "fnf"
	| "staff"
	| "administrator"
	| "owner"
	| "beta";
