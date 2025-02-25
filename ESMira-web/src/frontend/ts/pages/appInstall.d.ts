import { SectionContent } from "../site/SectionContent";
import { Vnode } from "mithril";
import { Section } from "../site/Section";
export declare class Content extends SectionContent {
    private readonly pageHtml;
    private readonly pageTitle;
    static preLoad(section: Section): Promise<any>[];
    constructor(section: Section, html: {
        pageHtml: string;
        pageTitle: string;
        forwarded: boolean;
    });
    title(): string;
    getView(): Vnode<any, any>;
}
