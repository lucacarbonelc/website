import { Vnode } from "mithril";
import { TranslationRootInterface } from "../observable/interfaces/TranslationRootInterface";
export declare class ChangeLanguageList {
    readonly promise: Promise<void>;
    private readonly langCodeNames;
    private readonly getTranslationRoot;
    constructor(getTranslationRoot: () => TranslationRootInterface);
    private addLang;
    private removeLang;
    getView(): Vnode<any, any>;
}
