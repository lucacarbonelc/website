import { SectionContent } from "../site/SectionContent";
import { Vnode } from "mithril";
import { Section } from "../site/Section";
import { StudiesDataType } from "../loader/StudyLoader";
export declare class Content extends SectionContent {
    private readonly isRedirected;
    static preLoad(section: Section): Promise<any>[];
    constructor(section: Section, studies: StudiesDataType);
    title(): string;
    getView(): Vnode<any, any>;
}
