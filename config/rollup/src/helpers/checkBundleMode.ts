import type { Mode } from "@/types";

export const checkBundleMode = <T extends Mode>(
    mode: Mode,
    expected: T
): mode is T => mode === expected;
