import { ObservableStructure } from "../../observable/ObservableStructure";
export declare class SignalTime extends ObservableStructure {
    readonly id: number;
    startTimeOfDay: import("../../observable/BaseObservable").BaseObservable<number>;
    endTimeOfDay: import("../../observable/BaseObservable").BaseObservable<number>;
    random: import("../../observable/BaseObservable").BaseObservable<boolean>;
    randomFixed: import("../../observable/BaseObservable").BaseObservable<boolean>;
    frequency: import("../../observable/BaseObservable").BaseObservable<number>;
    minutesBetween: import("../../observable/BaseObservable").BaseObservable<number>;
}
