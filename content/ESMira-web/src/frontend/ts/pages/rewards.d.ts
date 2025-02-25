import { SectionContent } from "../site/SectionContent";
import { Vnode } from "mithril";
import { Section } from "../site/Section";
export declare class Content extends SectionContent {
    private faultyEmailContent;
    static preLoad(section: Section): Promise<any>[];
    title(): string;
    titleExtra(): Vnode<any, any> | null;
    getView(): Vnode<any, any>;
}
