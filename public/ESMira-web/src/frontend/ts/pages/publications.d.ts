import { SectionContent } from "../site/SectionContent";
import { Vnode } from "mithril";
import { Section } from "../site/Section";
import { ESMiraPublicationsInterface } from "../loader/AboutESMiraLoader";
export declare class Content extends SectionContent {
    private publications;
    static preLoad(_section: Section): Promise<any>[];
    constructor(section: Section, publications: ESMiraPublicationsInterface);
    title(): string;
    getView(): Vnode<any, any>;
}
