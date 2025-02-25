import { SectionContent } from "../site/SectionContent";
import { Vnode } from "mithril";
import { Section } from "../site/Section";
export declare class Content extends SectionContent {
    static preLoad(section: Section): Promise<any>[];
    title(): string;
    private addSumScore;
    private removeSumScore;
    private addVirtualInput;
    private removeVirtualInput;
    getView(): Vnode<any, any>;
    private getSumScoresEntryView;
    private getVirtualInputsEntryView;
}
