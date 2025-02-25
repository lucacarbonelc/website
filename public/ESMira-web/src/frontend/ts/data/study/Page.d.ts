import { ObservableStructure } from "../../observable/ObservableStructure";
import { Input } from "./Input";
export declare class Page extends ObservableStructure {
    randomized: import("../../observable/BaseObservable").BaseObservable<boolean>;
    skipAfterSecs: import("../../observable/BaseObservable").BaseObservable<number>;
    header: import("../../observable/BaseObservable").BaseObservable<string>;
    footer: import("../../observable/BaseObservable").BaseObservable<string>;
    inputs: import("../../observable/TranslatableArray").TranslatableArray<import("../../observable/ObservableStructure").ObservableStructureDataType, Input>;
    relevance: import("../../observable/BaseObservable").BaseObservable<string>;
}
