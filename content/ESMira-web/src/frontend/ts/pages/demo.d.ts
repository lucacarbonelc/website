import { Vnode } from "mithril";
import { Content as AttendContent } from "../pages/attend";
import { Section } from "../site/Section";
import { Questionnaire } from "../data/study/Questionnaire";
import { Study } from "../data/study/Study";
export declare class Content extends AttendContent {
    private readonly questionnaireIndex;
    private readonly indexObserverId;
    private langObserverId;
    constructor(section: Section, study: Study);
    protected createUrl(): string;
    protected getAttendQuestionnaire(): Questionnaire;
    getView(): Vnode<any, any>;
    destroy(): void;
}
