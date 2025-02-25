import { SectionContent } from "../site/SectionContent";
import { Vnode } from "mithril";
import { Section } from "../site/Section";
export declare class Content extends SectionContent {
    private readonly merlinLog;
    static preLoad(section: Section): Promise<any>[];
    constructor(section: Section, merlinLog: string);
    title(): string;
    getView(): Vnode<any, any>;
}
