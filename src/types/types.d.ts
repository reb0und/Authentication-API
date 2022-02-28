export type license = `MINTY-${string}-${string}-${string}`;

export type email = `${string}@${string}.${string}`;

export type licenseTypes =
	| "developer"
	| "renewal"
	| "monthly"
	| "weekly"
	| "lifetime"
	| "fnf"
	| "staff"
	| "administrator"
	| "owner";
