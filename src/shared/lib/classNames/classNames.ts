type Mods = Record<string, boolean|string>;

export function classNames(
    className: string,
    mods: Mods = {},
    additional: Array<string | undefined> = [],
): string {
    return [
        className,
        ...additional.filter(Boolean),
        ...Object.keys(mods).filter((key) => mods[key]),
    ].join(' ');
}
