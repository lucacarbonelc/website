import { ObservableTypes } from "./types/ObservableTypes";
import { BaseObservable } from "./BaseObservable";
import { PrimitiveType } from "./types/PrimitiveType";
import { JsonTypes } from "./types/JsonTypes";
export declare class ObservablePrimitive<T extends PrimitiveType> extends BaseObservable<T> {
    protected _isDifferent: boolean;
    protected backingField: T;
    protected defaultField: T;
    constructor(value: T, parent: BaseObservable<ObservableTypes> | null, key: string);
    createJson(): JsonTypes;
    reCalcIsDifferent(forceIsDifferent?: boolean): void;
    isDifferent(): boolean;
    get(): T;
    set(value: T, silently?: boolean): void;
}
