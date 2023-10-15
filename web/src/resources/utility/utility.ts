/**
 * Construct a type with the properties of T but with keys in K as optional.
 */
export type Optional<T, K extends keyof T> = Partial<T> & Omit<T, K>;

export type SystemGeneratedString = string;
