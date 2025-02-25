import { PrimitiveType } from "./types/PrimitiveType";
import { ObservableTypes } from "./types/ObservableTypes";
import { BaseObservable, JsonCreatorOptions } from "./BaseObservable";
import { ObservableStructureDataType } from "./ObservableStructure";
import { JsonTypes } from "./types/JsonTypes";
import { ArrayInterface } from "./interfaces/ArrayInterface";
export declare class ObservableArray<InputT extends ObservableStructureDataType | PrimitiveType, ObsT extends BaseObservable<ObservableTypes> | BaseObservable<PrimitiveType>> extends BaseObservable<any[]> implements ArrayInterface<InputT, ObsT> {
    private _isDifferent;
    private readonly constructObservable;
    private backingField;
    private readonly defaultField;
    constructor(defaultFields: InputT[], parent: BaseObservable<ObservableTypes> | null, key: string, constructObservable: (data: InputT, parent: BaseObservable<ObservableTypes> | null, key: string) => ObsT);
    createJson(options?: JsonCreatorOptions): JsonTypes;
    reCalcIsDifferent(forceIsDifferent?: boolean): void;
    isDifferent(): boolean;
    get(): ObsT[];
    set(_value: ObsT[], _silently?: boolean): void;
    updateKeyName(keyName?: string, parent?: BaseObservable<ObservableTypes>): void;
    addCopy(original: ObsT, index?: number): ObsT;
    push(value: InputT): ObsT;
    remove(index: number): ObsT;
    replace(values: InputT[], silent?: boolean): void;
    move(oldIndex: number, newIndex: number): void;
    moveFromOtherList(oldList: ArrayInterface<InputT, ObsT>, oldIndex: number, newIndex: number): void;
    indexOf(searchElement: PrimitiveType, fromIndex?: number): number;
}
