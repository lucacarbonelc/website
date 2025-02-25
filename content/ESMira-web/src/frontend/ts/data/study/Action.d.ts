import { ObservableStructure } from "../../observable/ObservableStructure";
export declare class Action extends ObservableStructure {
    type: import("../../observable/BaseObservable").BaseObservable<number>;
    timeout: import("../../observable/BaseObservable").BaseObservable<number>;
    reminder_count: import("../../observable/BaseObservable").BaseObservable<number>;
    reminder_delay_minu: import("../../observable/BaseObservable").BaseObservable<number>;
    msgText: import("../../observable/BaseObservable").BaseObservable<string>;
}
