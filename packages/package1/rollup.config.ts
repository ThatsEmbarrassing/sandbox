import type { RollupOptions } from "rollup";

import { buildConfig } from "@sandbox/rollup";

const config: RollupOptions[] = buildConfig({
    input: "./src/index.ts",
    bundleDir: "./dist",
});

export default config;
