import { isFetchError } from '@/features/api/apiSlice'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import toast from 'react-hot-toast'
export type ErrorWithMessage = {
    message: string
}
/**
 * Type predicate to narrow an unknown error to an object with a string 'message' property
 */
export function isErrorWithMessage(
    error: unknown
): error is { message: string } {
    return (
        typeof error === 'object' &&
        error != null &&
        'message' in error &&
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        typeof (error as any).message === 'string'
    )
}

/**
 * Type predicate to narrow an unknown error to `FetchBaseQueryError`
 */
export function isFetchBaseQueryError(
    error: unknown
): error is FetchBaseQueryError {
    return typeof error === 'object' && error != null && 'status' in error
}

function toErrorWithMessage(maybeError: unknown): ErrorWithMessage {
    if (isErrorWithMessage(maybeError)) return maybeError

    try {
        return new Error(JSON.stringify(maybeError))
    } catch {
        // fallback in case there's an error stringifying the maybeError
        // like with circular references for example.
        return new Error(String(maybeError))
    }
}

export function getErrorMessage(error: unknown) {
    return toErrorWithMessage(error).message
}
export const reportError = ({ message }: { message: string }) => {
    console.warn(message)
    // send the error to our logging service...
}

export const showError = (err: unknown, defaultError = 'An error occurred') => {
    if (process.env.NODE_ENV === 'development') {
        console.error(err);
    }
    if (isFetchError(err)) {
        const errors = err.data.errors;
        if (errors && errors.length > 0) {
            errors.forEach((err) => toast.error(err));
        }
    } else if (isErrorWithMessage(err)) toast.error(err.message);
    else toast.error(defaultError);
}
