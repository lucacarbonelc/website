import { SectionContent } from "../site/SectionContent";
import { Vnode } from "mithril";
import { Section } from "../site/Section";
export declare class Content extends SectionContent {
    private readonly report;
    static preLoad(section: Section): Promise<any>[];
    constructor(section: Section, report: string);
    title(): string;
    private getName;
    getView(): Vnode<any, any>;
}
