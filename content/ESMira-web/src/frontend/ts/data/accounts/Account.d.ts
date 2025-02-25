import { ObservableStructure, ObservableStructureDataType } from "../../observable/ObservableStructure";
import { BaseObservable } from "../../observable/BaseObservable";
import { ObservableTypes } from "../../observable/types/ObservableTypes";
export declare class Account extends ObservableStructure {
    accountName: BaseObservable<string>;
    admin: BaseObservable<boolean>;
    create: BaseObservable<boolean>;
    read: import("../../observable/ObservableArray").ObservableArray<number, BaseObservable<number>>;
    write: import("../../observable/ObservableArray").ObservableArray<number, BaseObservable<number>>;
    msg: import("../../observable/ObservableArray").ObservableArray<number, BaseObservable<number>>;
    publish: import("../../observable/ObservableArray").ObservableArray<number, BaseObservable<number>>;
    constructor(data: ObservableStructureDataType, parent?: BaseObservable<ObservableTypes> | null, _key?: string, newLang?: string);
    updateKeyName(_keyName: string, parent?: BaseObservable<ObservableTypes>): void;
}
