import { SectionContent } from "../site/SectionContent";
import { Vnode } from "mithril";
import { Section } from "../site/Section";
import { AboutESMiraInterface } from "../loader/AboutESMiraLoader";
export declare class Content extends SectionContent {
    private about;
    static preLoad(_section: Section): Promise<any>[];
    constructor(section: Section, about: AboutESMiraInterface);
    title(): string;
    getView(): Vnode<any, any>;
}
