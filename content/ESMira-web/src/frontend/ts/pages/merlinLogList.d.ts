import { Vnode } from "mithril";
import { MerlinLogInfo } from "../data/merlinLogs/MerlinLogInfo";
import { Section } from "../site/Section";
import { SectionContent } from "../site/SectionContent";
export declare class Content extends SectionContent {
    private readLogs;
    private unreadLogs;
    static preLoad(section: Section): Promise<any>[];
    constructor(section: Section, merlinLogs: MerlinLogInfo[]);
    title(): string;
    private reloadMerlinLogs;
    private sortMerlinLogs;
    private getName;
    private deleteMerlinLog;
    private markMerlinLogAsSeen;
    private addNoteToMerlinLog;
    private getMerlinLogList;
    getView(): Vnode<any, any>;
}
