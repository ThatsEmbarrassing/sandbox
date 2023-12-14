import type { Mode } from "@/types";
import type { BaseFactoryOptions } from "@factories/types";

export interface JSFactoryOptions extends BaseFactoryOptions {
    mode: Mode;
}
