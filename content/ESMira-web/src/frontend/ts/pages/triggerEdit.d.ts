import { SectionContent } from "../site/SectionContent";
import { Vnode } from "mithril";
import { Section } from "../site/Section";
export declare class Content extends SectionContent {
    private editEventAsTitle;
    static preLoad(section: Section): Promise<any>[];
    title(): string;
    private removeSignalTime;
    private copySignalTime;
    private addSignalTime;
    private hasSchedule;
    private getActionView;
    private getEventView;
    private getSignalTimeView;
    private getScheduleView;
    getView(): Vnode<any, any>;
}
