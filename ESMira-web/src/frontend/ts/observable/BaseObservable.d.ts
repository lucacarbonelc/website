import { ObservableTypes } from "./types/ObservableTypes";
import { SharedForObservable } from "./SharedForObservable";
import { JsonTypes } from "./types/JsonTypes";
export declare class ObserverId {
    readonly shared: SharedForObservable;
    readonly id: number;
    readonly address: string;
    constructor(shared: SharedForObservable, id: number, address: string);
    removeObserver(): void;
}
export type ObserverCallbackType<T extends ObservableTypes> = (obj: BaseObservable<T>, turnedDifferent: boolean, bubbled: boolean) => void;
export type JsonCreatorOptions = {
    dontFilterDefaults?: boolean;
};
export declare abstract class BaseObservable<T extends ObservableTypes> {
    readonly shared: SharedForObservable;
    parent: BaseObservable<ObservableTypes> | null;
    private address;
    keyName: string;
    protected constructor(parent: BaseObservable<ObservableTypes> | null, key: string);
    private createAddress;
    protected runObservers(turnedDifferent: boolean, target?: BaseObservable<ObservableTypes>): void;
    addObserver(callback: ObserverCallbackType<T>, existingId?: ObserverId): ObserverId;
    importObserverData(other: BaseObservable<T>): void;
    removeAllConnectedObservers(): void;
    updateKeyName(keyName?: string, parent?: BaseObservable<ObservableTypes>): void;
    hasMutated(turnedDifferent?: boolean, forceIsDifferent?: boolean, target?: BaseObservable<ObservableTypes>): void;
    abstract reCalcIsDifferent(forceIsDifferent: boolean): void;
    abstract get(): T;
    abstract set(value: T, silently?: boolean): void;
    abstract createJson(options?: JsonCreatorOptions): JsonTypes;
    abstract isDifferent(): boolean;
}
