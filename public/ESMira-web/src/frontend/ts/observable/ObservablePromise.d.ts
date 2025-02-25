import { ObservableTypes } from "./types/ObservableTypes";
import { BaseObservable } from "./BaseObservable";
import { JsonTypes } from "./types/JsonTypes";
export declare class ObservablePromise<T> extends BaseObservable<Promise<T>> {
    protected backingField: Promise<T>;
    constructor(value: Promise<T>, parent: BaseObservable<ObservableTypes> | null, key: string);
    reCalcIsDifferent(_?: boolean): void;
    createJson(): JsonTypes;
    isDifferent(): boolean;
    get(): Promise<any>;
    set(value: Promise<T>, silently?: boolean): void;
    setValue(value: T, silently?: boolean): void;
}
