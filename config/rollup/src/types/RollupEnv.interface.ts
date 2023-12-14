import { Mode } from "./Mode";

export interface RollupEnv extends NodeJS.ProcessEnv {
    mode: Mode;
}
