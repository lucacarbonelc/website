import { SectionContent } from "../site/SectionContent";
import { Vnode } from "mithril";
import { Section } from "../site/Section";
import { Study } from "../data/study/Study";
export declare class Content extends SectionContent {
    protected targetPage: string;
    protected titleString: string;
    private readonly accessKey;
    protected studies: Study[];
    constructor(section: Section);
    preInit(): Promise<any>;
    title(): string;
    protected updateSortedStudies(unsortedStudies: Study[]): void;
    private reloadAccessKey;
    private loadStudies;
    getView(): Vnode<any, any>;
    protected getStudyLinkView(study: Study): Vnode<any, any>;
    protected getStudyTagInParentheses(study: Study): string;
}
