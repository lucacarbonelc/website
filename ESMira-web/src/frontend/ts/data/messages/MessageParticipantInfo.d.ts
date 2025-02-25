import { ObservableStructure } from "../../observable/ObservableStructure";
export declare class MessageParticipantInfo extends ObservableStructure {
    name: import("../../observable/BaseObservable").BaseObservable<string>;
    lastMsg: import("../../observable/BaseObservable").BaseObservable<number>;
    archived: import("../../observable/BaseObservable").BaseObservable<boolean>;
    pending: import("../../observable/BaseObservable").BaseObservable<boolean>;
    unread: import("../../observable/BaseObservable").BaseObservable<boolean>;
}
