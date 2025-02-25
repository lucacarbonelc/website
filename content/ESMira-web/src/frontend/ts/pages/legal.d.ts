import { SectionContent } from "../site/SectionContent";
import { Vnode } from "mithril";
import { Section } from "../site/Section";
export declare class Content extends SectionContent {
    private tabIndex;
    private readonly showTabs;
    private readonly impressum;
    private readonly privacyPolicy;
    static preLoad(_section: Section): Promise<any>[];
    constructor(section: Section, legal: {
        impressum: string;
        privacyPolicy: string;
    });
    title(): string;
    getView(): Vnode<any, any>;
    private getLibraryEntry;
    private getLibrariesView;
}
