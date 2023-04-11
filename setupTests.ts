import { loadEnvConfig } from "@next/env";
import "@testing-library/jest-dom/extend-expect";
import "isomorphic-fetch";
loadEnvConfig(__dirname, true, { info: () => null, error: console.error });
/* JSDOM Mocks */
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
