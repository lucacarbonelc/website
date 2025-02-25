import { ObservableTypes } from "./types/ObservableTypes";
import { BaseObservable } from "./BaseObservable";
import { PrimitiveType } from "./types/PrimitiveType";
import { ObservableRecordBase } from "./ObservableRecordBase";
import { ObservablePrimitive } from "./ObservablePrimitive";
import { ObservableStructure } from "./ObservableStructure";
export declare class ObservableRecord<KeyT extends number | string, InputT extends ObservableTypes, ObsT extends BaseObservable<ObservableTypes> | BaseObservable<PrimitiveType>> extends ObservableRecordBase<KeyT, ObsT> {
    private readonly constructObservable;
    constructor(defaultFields: Record<KeyT, InputT>, key: string | undefined, constructObservable: (data: InputT, parent: BaseObservable<ObservableTypes> | null, key: string) => ObsT);
    set(data: Record<KeyT, InputT>, _silently?: boolean): void;
    add(key: KeyT, value: InputT): void;
}
export declare class ObservablePrimitiveRecord<KeyT extends number | string, InputT extends PrimitiveType> extends ObservableRecord<KeyT, InputT, ObservablePrimitive<InputT>> {
    constructor(defaultFields: Record<KeyT, InputT>, key?: string);
}
export declare class TranslatableObjectRecord<KeyT extends number | string, ObsT extends ObservableStructure> extends ObservableRecordBase<KeyT, ObsT> {
    constructor(data: Record<KeyT, ObsT>, key?: string);
    set(data: Record<KeyT, ObsT>, _silently?: boolean): void;
    add(key: KeyT, value: ObsT): void;
}
