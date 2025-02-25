import { SectionContent } from "../site/SectionContent";
import { Vnode } from "mithril";
import { Section } from "../site/Section";
export declare class Content extends SectionContent {
    private readonly questionnaireIndex;
    private readonly addDropdownMenus;
    static preLoad(section: Section): Promise<any>[];
    constructor(section: Section);
    title(): string;
    titleExtra(): Vnode<any, any> | null;
    private addQuestionnaire;
    private copyQuestionnaire;
    private deleteQuestionnaire;
    private addPage;
    private copyPage;
    private transferPage;
    private deletePage;
    private movePage;
    private movePageUp;
    private movePageDown;
    private hasPages;
    private hasInputs;
    private addInput;
    private copyInput;
    private deleteInput;
    getView(): Vnode<any, any>;
    private getQuestionnaireView;
    private getPageView;
}
