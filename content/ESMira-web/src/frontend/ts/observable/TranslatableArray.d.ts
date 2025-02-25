import { PrimitiveType } from "./types/PrimitiveType";
import { ObservableTypes } from "./types/ObservableTypes";
import { BaseObservable } from "./BaseObservable";
import { ObservableStructureDataType } from "./ObservableStructure";
import { JsonTypes } from "./types/JsonTypes";
import { BaseTranslatable, TranslatableJsonCreatorOptions } from "./BaseTranslatable";
import { ArrayInterface } from "./interfaces/ArrayInterface";
export declare class TranslatableArray<InputT extends ObservableStructureDataType | PrimitiveType, ObsT extends BaseTranslatable<ObservableTypes> | BaseTranslatable<PrimitiveType>> extends BaseTranslatable<any[]> implements ArrayInterface<InputT, ObsT> {
    private readonly array;
    constructor(defaultFields: InputT[], parent: BaseObservable<ObservableTypes> | null, key: string, constructObservable: (data: InputT, parent: BaseObservable<ObservableTypes> | null, key: string) => ObsT);
    createJson(options?: TranslatableJsonCreatorOptions): JsonTypes;
    get(): ObsT[];
    reCalcIsDifferent(forceIsDifferent?: boolean): void;
    hasMutated(turnedDifferent?: boolean, forceIsDifferent?: boolean, target?: BaseObservable<ObservableTypes>): void;
    isDifferent(): boolean;
    addLanguage(langCode: string, langData: any): void;
    removeLanguage(langCode: string): void;
    renameLanguage(oldLangCode: string, newLangCode: string): void;
    set(value: ObsT[], silently?: boolean): void;
    updateKeyName(keyName?: string, parent?: BaseObservable<ObservableTypes>): void;
    addCopy(original: ObsT, index?: number): ObsT;
    push(value: InputT): ObsT;
    replace(values: InputT[], silent?: boolean): void;
    remove(index: number): ObsT;
    move(oldIndex: number, newIndex: number): void;
    moveFromOtherList(oldList: ArrayInterface<InputT, ObsT>, oldIndex: number, newIndex: number): void;
    indexOf(searchElement: PrimitiveType, fromIndex?: number): number;
}
