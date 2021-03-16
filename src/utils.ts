function isNotNullish<T>(arg: null | undefined | T): arg is T {
	return arg !== null && arg !== undefined;
}

function isObjectLike(arg: unknown): arg is Record<string, unknown> {
	return (
		typeof arg === 'object' && isNotNullish(arg) && !!Object.keys(arg).length
	);
}

function isJson(
	arg: unknown | Record<string, unknown>,
): arg is Record<string, unknown> {
	if (!isNotNullish(arg)) return false;

	return isObjectLike(arg);
}

export { isJson, isNotNullish, isObjectLike };
