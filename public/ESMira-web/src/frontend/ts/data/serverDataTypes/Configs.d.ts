import { ObservableStructure } from "../../observable/ObservableStructure";
import { TranslationRootInterface } from "../../observable/interfaces/TranslationRootInterface";
export declare class Configs extends ObservableStructure implements TranslationRootInterface {
    defaultLang: import("../../observable/BaseObservable").BaseObservable<string>;
    langCodes: import("../../observable/ObservableArray").ObservableArray<string, import("../../observable/BaseObservable").BaseObservable<string>>;
}
