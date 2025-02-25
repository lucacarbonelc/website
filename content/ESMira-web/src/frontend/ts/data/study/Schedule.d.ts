import { ObservableStructure } from "../../observable/ObservableStructure";
import { SignalTime } from "./SignalTime";
export declare class Schedule extends ObservableStructure {
    userEditable: import("../../observable/BaseObservable").BaseObservable<boolean>;
    dailyRepeatRate: import("../../observable/BaseObservable").BaseObservable<number>;
    skipFirstInLoop: import("../../observable/BaseObservable").BaseObservable<boolean>;
    weekdays: import("../../observable/BaseObservable").BaseObservable<number>;
    dayOfMonth: import("../../observable/BaseObservable").BaseObservable<number>;
    signalTimes: import("../../observable/TranslatableArray").TranslatableArray<import("../../observable/ObservableStructure").ObservableStructureDataType, SignalTime>;
    getInitialDelayDays(): number;
}
