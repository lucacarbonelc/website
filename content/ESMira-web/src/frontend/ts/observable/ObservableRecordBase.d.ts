import { ObservableTypes } from "./types/ObservableTypes";
import { BaseObservable, JsonCreatorOptions } from "./BaseObservable";
import { JsonTypes } from "./types/JsonTypes";
import { PrimitiveType } from "./types/PrimitiveType";
export declare abstract class ObservableRecordBase<K extends number | string, ObsT extends BaseObservable<ObservableTypes> | BaseObservable<PrimitiveType>> extends BaseObservable<Record<number, ObsT>> {
    protected _isDifferent: boolean;
    protected backingField: Record<K, ObsT>;
    protected count: number;
    protected defaultKeys: string[];
    protected constructor(key?: string);
    reCalcIsDifferent(forceIsDifferent?: boolean): void;
    isDifferent(): boolean;
    contains(key: K): boolean;
    getEntry(key: K): ObsT | undefined;
    getFirst(): ObsT | undefined;
    get(): Record<K, ObsT>;
    filter(callback: (id: K, entry: ObsT) => boolean): Record<K, ObsT>;
    exists(key: K): boolean;
    setBase(data: Record<K, ObsT>, _silently?: boolean): void;
    addBase(key: K, value: ObsT): void;
    remove(key: K): void;
    getCount(): number;
    createJson(options?: JsonCreatorOptions): JsonTypes;
}
