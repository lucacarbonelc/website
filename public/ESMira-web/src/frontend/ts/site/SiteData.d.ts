import { Admin } from "../admin/Admin";
import { DynamicValueContainer } from "./DynamicValues";
import { DynamicCallbacks } from "./DynamicCallbacks";
import { StudyLoader } from "../loader/StudyLoader";
export declare class SiteData {
    readonly packageVersion: string;
    onlyShowLastSection: boolean;
    currentSection: number;
    readonly admin: Admin;
    readonly dynamicValues: DynamicValueContainer;
    readonly dynamicCallbacks: DynamicCallbacks;
    readonly studyLoader: StudyLoader;
    constructor(admin: Admin, serverVersion: number, packageVersion: string);
}
