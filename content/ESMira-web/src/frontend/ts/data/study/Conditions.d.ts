import { ObservableStructure } from "../../observable/ObservableStructure";
import { JsonTypes } from "../../observable/types/JsonTypes";
export declare class Conditions extends ObservableStructure {
    key: import("../../observable/BaseObservable").BaseObservable<string>;
    value: import("../../observable/BaseObservable").BaseObservable<string>;
    operator: import("../../observable/BaseObservable").BaseObservable<number>;
    static createDataStructure(key: string, value: string, operator: number): Record<string, JsonTypes>;
}
