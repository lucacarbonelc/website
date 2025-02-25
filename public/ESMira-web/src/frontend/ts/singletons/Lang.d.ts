import fallbackLang from "../../../locales/en.json";
export type LangKey = keyof typeof fallbackLang;
export declare const Lang: {
    code: string;
    isInit: boolean;
    init(langCode: string, packageVersion: string): void;
    awaitPromise(): Promise<boolean>;
    getDynamic: (key: string) => string;
    get: (key: LangKey, ...replacers: Array<string | number>) => string;
    getWithColon: (key: LangKey, ...replacers: Array<string | number>) => string;
};
