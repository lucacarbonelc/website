import { ObservableStructure, ObservableStructureDataType } from "../../observable/ObservableStructure";
import { BaseObservable } from "../../observable/BaseObservable";
import { ObservableTypes } from "../../observable/types/ObservableTypes";
export declare class SiteTranslations extends ObservableStructure {
    serverName: BaseObservable<string>;
    impressum: BaseObservable<string>;
    privacyPolicy: BaseObservable<string>;
    homeMessage: BaseObservable<string>;
    constructor(data: ObservableStructureDataType, parent: BaseObservable<ObservableTypes> | null, key: string, newLang?: string);
}
