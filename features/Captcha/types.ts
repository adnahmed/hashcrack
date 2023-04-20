import { langOptions } from "@/data/langOptions";
import { sizeOptions } from "@/data/turnstileWidgetSize";

export type Lang = typeof langOptions[number]["value"];

export type Theme = "light" | "dark" | "auto";
export type WidgetSize = typeof sizeOptions[number]["value"];
export type WidgetStatus = "solved" | "error" | "expired" | null;
