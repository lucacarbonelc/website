import { SectionContent } from "../site/SectionContent";
import { Vnode } from "mithril";
import { Section } from "../site/Section";
import { ErrorReportInfo } from "../data/errorReports/ErrorReportInfo";
export declare class Content extends SectionContent {
    private knownReports;
    private newReports;
    static preLoad(_section: Section): Promise<any>[];
    constructor(section: Section, reports: ErrorReportInfo[]);
    title(): string;
    private reloadErrorReports;
    private sortErrorReports;
    private getName;
    private deleteReport;
    private markReportAsSeen;
    private addNote;
    getView(): Vnode<any, any>;
    private getErrorReportList;
}
