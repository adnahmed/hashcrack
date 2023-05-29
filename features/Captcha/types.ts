import { langOptions } from "@/assets/langOptions";
import { sizeOptions } from "@/assets/turnstileWidgetSize";

export type Lang = typeof langOptions[number]["value"];

export type Theme = "light" | "dark" | "auto";
export type WidgetSize = typeof sizeOptions[number]["value"];
export type WidgetStatus = "solved" | "error" | "expired" | null;
