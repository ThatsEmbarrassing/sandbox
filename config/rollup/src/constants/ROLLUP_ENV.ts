import type { RollupEnv } from "../types";

export const ROLLUP_ENV = process.env as unknown as Partial<RollupEnv>;
