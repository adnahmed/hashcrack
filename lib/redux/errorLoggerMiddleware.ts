import type { Middleware, MiddlewareAPI } from '@reduxjs/toolkit'
import { isRejectedWithValue } from '@reduxjs/toolkit'
import { toast } from 'react-hot-toast'

/**
 * Log a warning and show a toast!
 */
export const rtkQueryErrorLogger: Middleware = (api: MiddlewareAPI) => (next) => (action) => {
    if (isRejectedWithValue(action)) {
    }

    return next(action)
}


