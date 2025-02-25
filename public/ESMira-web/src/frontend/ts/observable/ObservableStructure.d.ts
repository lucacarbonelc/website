import { PrimitiveType } from "./types/PrimitiveType";
import { JsonTypes } from "./types/JsonTypes";
import { ObservableTypes } from "./types/ObservableTypes";
import { BaseObservable } from "./BaseObservable";
import { BaseTranslatable, TranslatableJsonCreatorOptions } from "./BaseTranslatable";
import { TranslatableArray } from "./TranslatableArray";
import { ObservableArray } from "./ObservableArray";
export type ObservableStructureDataType = Record<string, JsonTypes>;
export declare abstract class ObservableStructure extends BaseTranslatable<ObservableTypes> {
    private _isDifferent;
    private alwaysDifferent;
    private readonly initJson;
    private readonly generalDefaultValues;
    private readonly valueIndex;
    constructor(data: ObservableStructureDataType, parent: BaseObservable<ObservableTypes> | null, key: string, newLang?: string);
    reCalcIsDifferent(forceIsDifferent?: boolean): void;
    setDifferent(isDifferent: boolean): void;
    isDifferent(): boolean;
    createJson(options?: TranslatableJsonCreatorOptions): Record<string, JsonTypes>;
    get(): any;
    set(_value: any): void;
    addLanguage(langCode: string, langData?: Record<string, JsonTypes>): void;
    renameLanguage(oldLangCode: string, newLangCode: string): void;
    removeLanguage(langCode: string): void;
    updateKeyName(keyName?: string, parent?: BaseObservable<ObservableTypes> | undefined): void;
    protected primitive<T extends PrimitiveType>(key: string, defaultValue: T): BaseObservable<T>;
    protected primitiveArray<T extends PrimitiveType>(key: string, defaultValue?: T[]): ObservableArray<T, BaseObservable<T>>;
    protected translatable(key: string, defaultValue: string): BaseObservable<string>;
    protected translatableArray(key: string, defaultValue?: string[]): TranslatableArray<string, BaseTranslatable<string>>;
    protected objectArray<T extends ObservableStructure>(key: string, typeConstructor: {
        new (data: ObservableStructureDataType, parent: BaseObservable<ObservableTypes> | null, key: string, newLang?: string): T;
    }): TranslatableArray<ObservableStructureDataType, T>;
    protected object<T extends ObservableStructure>(key: string, typeConstructor: {
        new (data: ObservableStructureDataType, parent: BaseObservable<ObservableTypes> | null, key: string, newLang?: string): T;
    }): T;
}
