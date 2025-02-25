import { SectionContent } from "../site/SectionContent";
import { Vnode } from "mithril";
import { Section } from "../site/Section";
export declare class Content extends SectionContent {
    private readonly homeMessage;
    title(): string;
    static preLoad(_section: Section): Promise<any>[];
    constructor(section: Section, settings: {
        homeMessage: string;
    });
    getView(): Vnode<any, any>;
}
