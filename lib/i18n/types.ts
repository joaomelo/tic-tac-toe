export type Locale = string;
export type Key = string;
export type Message = string;
export type Values = Record<string, string>;
export type Messages = Record<Locale, Record<Key, Message>>;
export type Modules = Record<string, Messages>;
