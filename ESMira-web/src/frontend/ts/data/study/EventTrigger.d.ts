import { ObservableStructure } from "../../observable/ObservableStructure";
export declare class EventTrigger extends ObservableStructure {
    label: import("../../observable/BaseObservable").BaseObservable<string>;
    cueCode: import("../../observable/BaseObservable").BaseObservable<string>;
    skipThisQuestionnaire: import("../../observable/BaseObservable").BaseObservable<boolean>;
    specificQuestionnaireEnabled: import("../../observable/BaseObservable").BaseObservable<boolean>;
    specificQuestionnaireInternalId: import("../../observable/BaseObservable").BaseObservable<number>;
    randomDelay: import("../../observable/BaseObservable").BaseObservable<boolean>;
    delaySec: import("../../observable/BaseObservable").BaseObservable<number>;
    delayMinimumSec: import("../../observable/BaseObservable").BaseObservable<number>;
}
