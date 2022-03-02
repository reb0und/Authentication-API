export default interface LicenseData {
	isBound: boolean;
	isExpired: boolean;
	isSuspended: boolean;
	isCancelled: boolean;
	isBanned: boolean;
	isActive: boolean;
	last_reset: Date | null;
	reset_count: number | 0;
	instance_count: number | 1;
}
