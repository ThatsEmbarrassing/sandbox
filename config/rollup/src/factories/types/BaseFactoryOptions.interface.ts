import type { RollupAliasOptions } from "@rollup/plugin-alias";
import type { ExternalOption, RollupOptions } from "rollup";

export interface BaseFactoryOptions {
    input: NonNullable<RollupOptions["input"]>;
    bundleDir: string;
    aliases?: NonNullable<RollupAliasOptions["entries"]>;
    external?: ExternalOption;
}
