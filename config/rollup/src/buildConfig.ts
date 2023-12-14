import type { RollupOptions } from "rollup";

import { ROLLUP_ENV } from "./constants";

import { DeclarationFactory, JSFactory } from "./factories";

import type { DeclarationFactoryOptions, JSFactoryOptions } from "./factories";

interface BuildConfigOptions
    extends DeclarationFactoryOptions,
        Omit<JSFactoryOptions, "mode"> {}

export function buildConfig(props: BuildConfigOptions): RollupOptions[] {
    const { mode = "development" } = ROLLUP_ENV;

    return [JSFactory({ mode, ...props }), DeclarationFactory({ ...props })];
}
