import { BaseObservable, JsonCreatorOptions } from "./BaseObservable";
import { ObservableTypes } from "./types/ObservableTypes";
import { ObservablePrimitive } from "./ObservablePrimitive";
export type TranslatableJsonCreatorOptions = {
    dontIncludeAllLanguages?: boolean;
} & JsonCreatorOptions;
export declare abstract class BaseTranslatable<T extends ObservableTypes> extends BaseObservable<T> {
    readonly currentLangCode: ObservablePrimitive<string>;
    protected constructor(parent: BaseObservable<ObservableTypes> | null, key: string, newLang?: string);
    protected isTranslatable(value: BaseObservable<any>): value is BaseTranslatable<any>;
    abstract addLanguage(langCode: string, langData?: any): void;
    abstract renameLanguage(oldLangCode: string, newLangCode: string): void;
    abstract removeLanguage(langCode: string): void;
}
