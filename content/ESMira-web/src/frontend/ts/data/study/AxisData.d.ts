import { ObservableStructure } from "../../observable/ObservableStructure";
import { Conditions } from "./Conditions";
export declare class AxisData extends ObservableStructure {
    variableName: import("../../observable/BaseObservable").BaseObservable<string>;
    observedVariableIndex: import("../../observable/BaseObservable").BaseObservable<number>;
    conditionType: import("../../observable/BaseObservable").BaseObservable<number>;
    conditions: import("../../observable/TranslatableArray").TranslatableArray<import("../../observable/ObservableStructure").ObservableStructureDataType, Conditions>;
}
