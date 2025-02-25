import { SectionAlternative, SectionContent } from "../site/SectionContent";
import { Vnode } from "mithril";
import { Section } from "../site/Section";
export declare class Content extends SectionContent {
    private indexContainer;
    static preLoad(section: Section): Promise<any>[];
    title(): string;
    hasAlternatives(): boolean;
    getAlternatives(): SectionAlternative[] | null;
    private getInputIndices;
    private getInputFromIndices;
    private getInput;
    getView(): Vnode<any, any>;
}
