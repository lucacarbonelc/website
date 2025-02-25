import { SectionContent } from "../site/SectionContent";
import { Vnode } from "mithril";
import { Section } from "../site/Section";
import { Study } from "../data/study/Study";
export declare class Content extends SectionContent {
    private readonly publicStatisticsPromises;
    static preLoad(section: Section): Promise<any>[];
    constructor(section: Section, study: Study);
    title(): string;
    private loadPublicStatistics;
    getView(): Vnode<any, any>;
}
