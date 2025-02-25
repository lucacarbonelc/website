import { ObservableStructure } from "../../observable/ObservableStructure";
import { JsonTypes } from "../../observable/types/JsonTypes";
import { SiteTranslations } from "./SiteTranslations";
import { TranslationRootInterface } from "../../observable/interfaces/TranslationRootInterface";
export declare class ServerData extends ObservableStructure implements TranslationRootInterface {
    defaultLang: import("../../observable/BaseObservable").BaseObservable<string>;
    langCodes: import("../../observable/ObservableArray").ObservableArray<string, import("../../observable/BaseObservable").BaseObservable<string>>;
    siteTranslations: SiteTranslations;
    constructor(data: Record<string, JsonTypes>, newLang?: string);
}
