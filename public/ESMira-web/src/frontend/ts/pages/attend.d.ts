import { SectionContent } from "../site/SectionContent";
import { Vnode } from "mithril";
import { Study } from "../data/study/Study";
import { Questionnaire } from "../data/study/Questionnaire";
import { Section } from "../site/Section";
export declare class Content extends SectionContent {
    private pageTitle;
    private currentPageHtml;
    private currentPageInt;
    protected noCookieSID: string;
    private isFinished;
    static preLoad(section: Section): Promise<any>[];
    preInit(_study: Study): Promise<void>;
    title(): string;
    titleExtra(): Vnode<any, any> | null;
    protected getAttendQuestionnaire(): Questionnaire;
    protected createUrl(): string;
    loadQuestionnaire(formData?: string): Promise<void>;
    protected getQuestionnaireView(questionnaire: Questionnaire): Vnode<any, any>;
    getView(): Vnode<any, any>;
}
