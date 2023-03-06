import { loadEnvConfig } from '@next/env'
import '@testing-library/jest-dom/extend-expect'
loadEnvConfig(__dirname, true, { info: () => null, error: console.error })