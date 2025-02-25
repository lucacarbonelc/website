import { SectionContent } from "../site/SectionContent";
import { Vnode } from "mithril";
import { Section } from "../site/Section";
export declare class Content extends SectionContent {
    private changeLanguageList;
    static preLoad(section: Section): Promise<any>[];
    constructor(sitePage: Section);
    preInit(): Promise<void>;
    title(): string;
    getView(): Vnode<any, any>;
}
