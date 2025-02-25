import { Vnode } from "mithril";
import { Section } from "./Section";
import { Study } from "../data/study/Study";
import { StaticValues } from "./StaticValues";
import { ObservablePrimitive } from "../observable/ObservablePrimitive";
import { Questionnaire } from "../data/study/Questionnaire";
import { DynamicValues } from "./DynamicValues";
import { PrimitiveType } from "../observable/types/PrimitiveType";
import { AccountPermissions } from "../admin/AccountPermissions";
import { AdminToolsInterface } from "../admin/AdminToolsInterface";
import { Admin } from "../admin/Admin";
export interface SectionAlternative {
    title: string;
    target: string | false;
    header?: boolean;
}
export declare abstract class SectionContent {
    readonly section: Section;
    constructor(section: Section);
    static preLoad(_section: Section): Promise<any>[];
    preInit(..._responses: any): Promise<any>;
    hasAlternatives(): boolean;
    getAlternatives(): SectionAlternative[] | Promise<SectionAlternative[]> | null;
    abstract title(): string;
    titleExtra(): Vnode<any, any> | null;
    getDynamic<T extends PrimitiveType>(key: keyof DynamicValues, defaultValue: T): ObservablePrimitive<T>;
    setDynamic<T extends PrimitiveType>(key: keyof DynamicValues, newValue: T): void;
    getStaticInt<T extends StaticValues>(key: T): number | null;
    getStaticString<T extends StaticValues>(key: T): string | null;
    protected getStudyOrNull(id?: number): Study | null;
    getStudyOrThrow(id?: number): Study;
    protected getQuestionnaireOrNull(qId?: number, study?: Study | null): Questionnaire | null;
    protected getQuestionnaireOrThrow(qId?: number): Questionnaire;
    getTools(): AdminToolsInterface;
    getAdmin(): Admin;
    hasPermission(name: keyof AccountPermissions, studyId: number): boolean;
    getUrl(name: string, depth?: number): string;
    goTo(target: string): void;
    newSection(target: string, depth?: number): void;
    abstract getView(): Vnode<any, any>;
    destroy(): void;
}
