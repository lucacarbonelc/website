import { ObservableStructure } from "../../observable/ObservableStructure";
import { Action } from "./Action";
import { Schedule } from "./Schedule";
import { EventTrigger } from "./EventTrigger";
export declare class ActionTrigger extends ObservableStructure {
    actions: import("../../observable/TranslatableArray").TranslatableArray<import("../../observable/ObservableStructure").ObservableStructureDataType, Action>;
    schedules: import("../../observable/TranslatableArray").TranslatableArray<import("../../observable/ObservableStructure").ObservableStructureDataType, Schedule>;
    eventTriggers: import("../../observable/TranslatableArray").TranslatableArray<import("../../observable/ObservableStructure").ObservableStructureDataType, EventTrigger>;
}
