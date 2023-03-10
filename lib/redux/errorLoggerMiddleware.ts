import type { Middleware, MiddlewareAPI } from '@reduxjs/toolkit'
import { isRejectedWithValue } from '@reduxjs/toolkit'
import { toast } from 'react-hot-toast'

/**
 * Log a warning and show a toast!
 */
export const rtkQueryErrorLogger: Middleware = (api: MiddlewareAPI) => (next) => (action) => {
    if (isRejectedWithValue(action)) {
        console.warn('We got a rejected action!')
        toast.error(action.error.message, { icon: "⚠️" }) // TODO: Improve Error Message
    }

    return next(action)
}


