import { SectionContent } from "../site/SectionContent";
import { Vnode } from "mithril";
import { Section } from "../site/Section";
export declare class Content extends SectionContent {
    static preLoad(section: Section): Promise<any>[];
    title(): string;
    private removeActionTrigger;
    private copyActionTrigger;
    private addSchedule;
    private addEvent;
    private getSchedule;
    private getEventTrigger;
    private getScheduleTitle;
    getView(): Vnode<any, any>;
    private getQuestionnaireView;
    private getActionTriggerView;
    private createFilterEntries;
    private getFilterView;
    private getFilterEntryView;
    private getFilterDropdownView;
}
