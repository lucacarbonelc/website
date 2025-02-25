import { SectionContent } from "../site/SectionContent";
import { Vnode } from "mithril";
import { Section } from "../site/Section";
export declare class Content extends SectionContent {
    private isFrozen;
    static preLoad(section: Section): Promise<any>[];
    constructor(section: Section, [frozen]: boolean[]);
    title(): string;
    private toggleFreezeStudy;
    private deleteStudy;
    getView(): Vnode<any, any>;
}
