type GetCorrectImportObjectResult<T> = T extends NonNullable<infer R>
    ? // eslint-disable-next-line @typescript-eslint/ban-types
      R extends Function
        ? R
        : R extends { default: infer L }
        ? L
        : R
    : null;

const isNullable = (value: unknown): boolean => {
    return value === null || value === undefined;
};

export const getCorrectImportObject = <T>(
    _module: T
): GetCorrectImportObjectResult<T> => {
    if (isNullable(_module)) return null as GetCorrectImportObjectResult<T>;

    const module = _module as NonNullable<GetCorrectImportObjectResult<T>>;

    switch (typeof module) {
        case "object":
            if (Object.prototype.hasOwnProperty.call(module, "default")) {
                const moduleWithDefault = module as unknown as {
                    default: unknown;
                };

                return moduleWithDefault.default as GetCorrectImportObjectResult<T>;
            }
        // eslint-disable-next-line no-fallthrough
        case "function":
        default:
            return module;
    }
};
