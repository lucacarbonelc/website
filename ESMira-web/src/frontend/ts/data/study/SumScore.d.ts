import { ObservableStructure } from "../../observable/ObservableStructure";
export declare class SumScore extends ObservableStructure {
    name: import("../../observable/BaseObservable").BaseObservable<string>;
    addList: import("../../observable/ObservableArray").ObservableArray<string, import("../../observable/BaseObservable").BaseObservable<string>>;
    subtractList: import("../../observable/ObservableArray").ObservableArray<string, import("../../observable/BaseObservable").BaseObservable<string>>;
}
