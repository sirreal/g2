import { is } from './is';

/**
 * Determines if a value is null or undefined.
 *
 * @param value The value to check.
 * @return  Whether value is null or undefined.
 */
export function isValueDefined(value: unknown) {
	return is.defined(value);
}

/**
 * Determines if a value is empty, null, or undefined.
 *
 * @param unknown value The value to check.
 * @return  Whether value is empty.
 */
export function isValueEmpty(value: unknown): boolean {
	const isEmptyString = value === '';

	return !isValueDefined(value) || isEmptyString;
}

/**
 * Attempts to get a defined/non-null value from a collection of arguments.
 *
 * @param  values Values to derive from.
 * @param  fallbackValue Fallback value if there are no defined values.
 * @return  A defined value or the fallback value.
 */
export function getDefinedValue<T>(values: T[], fallbackValue: T): T {
	return values.find(isValueDefined) ?? fallbackValue;
}
