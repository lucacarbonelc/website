import { SectionAlternative, SectionContent } from "../site/SectionContent";
import { Vnode } from "mithril";
import { Study } from "../data/study/Study";
import { Section } from "../site/Section";
export declare class Content extends SectionContent {
    private readonly studyObserverId;
    private readonly addDropdownMenus;
    static preLoad(section: Section): Promise<any>[];
    constructor(section: Section, study: Study);
    title(): string;
    titleExtra(): Vnode<any, any> | null;
    hasAlternatives(): boolean;
    getAlternatives(): SectionAlternative[];
    private updateSaveState;
    private clearSaveState;
    private addQuestionnaire;
    getView(): Vnode<any, any>;
    destroy(): void;
}
