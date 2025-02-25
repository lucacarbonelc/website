import { ObservableTypes } from "./types/ObservableTypes";
import { BaseObservable } from "./BaseObservable";
import { PrimitiveType } from "./types/PrimitiveType";
import { JsonTypes } from "./types/JsonTypes";
import { BaseTranslatable, TranslatableJsonCreatorOptions } from "./BaseTranslatable";
type LanguageData<T> = Record<string, T>;
export declare class TranslatablePrimitive<T extends PrimitiveType> extends BaseTranslatable<T> {
    private readonly observables;
    private langCount;
    private readonly defaultValue;
    constructor(value: T | LanguageData<T>, parent: BaseObservable<ObservableTypes> | null, key: string, newLang?: string);
    updateKeyName(keyName: string, parent?: BaseObservable<ObservableTypes> | undefined): void;
    createJson(options?: TranslatableJsonCreatorOptions): JsonTypes;
    addLanguage(langCode: string, value?: T): void;
    renameLanguage(oldLangCode: string, newLangCode: string): void;
    removeLanguage(langCode: string): void;
    reCalcIsDifferent(forceIsDifferent?: boolean): void;
    hasMutated(turnedDifferent?: boolean, forceIsDifferent?: boolean, target?: BaseObservable<ObservableTypes>): void;
    isDifferent(): boolean;
    private getObs;
    get(): T;
    set(value: T): void;
}
export {};
