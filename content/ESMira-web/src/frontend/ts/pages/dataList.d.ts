import { SectionContent } from "../site/SectionContent";
import { Vnode } from "mithril";
import { Section } from "../site/Section";
import { Study } from "../data/study/Study";
export declare class Content extends SectionContent {
    private is_generating_zip;
    private readonly backupEntries;
    static preLoad(section: Section): Promise<any>[];
    constructor(section: Section, study: Study, dataEntries: string[]);
    title(): string;
    private backupStudy;
    private emptyData;
    getView(): Vnode<any, any>;
    private getDataLineView;
    private waitForDownload;
}
