import { ObservableStructure } from "../../observable/ObservableStructure";
export declare class EventUploadSettings extends ObservableStructure {
    actions_executed: import("../../observable/BaseObservable").BaseObservable<boolean>;
    invitation: import("../../observable/BaseObservable").BaseObservable<boolean>;
    invitation_missed: import("../../observable/BaseObservable").BaseObservable<boolean>;
    message: import("../../observable/BaseObservable").BaseObservable<boolean>;
    notification: import("../../observable/BaseObservable").BaseObservable<boolean>;
    rejoined: import("../../observable/BaseObservable").BaseObservable<boolean>;
    reminder: import("../../observable/BaseObservable").BaseObservable<boolean>;
    schedule_changed: import("../../observable/BaseObservable").BaseObservable<boolean>;
    schedule_planned: import("../../observable/BaseObservable").BaseObservable<boolean>;
    schedule_removed: import("../../observable/BaseObservable").BaseObservable<boolean>;
    statistic_viewed: import("../../observable/BaseObservable").BaseObservable<boolean>;
    study_message: import("../../observable/BaseObservable").BaseObservable<boolean>;
    study_updated: import("../../observable/BaseObservable").BaseObservable<boolean>;
}
