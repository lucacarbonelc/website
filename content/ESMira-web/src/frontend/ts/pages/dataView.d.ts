import { SectionContent } from "../site/SectionContent";
import { Vnode } from "mithril";
import { Section } from "../site/Section";
import { CsvLoader } from "../loader/csv/CsvLoader";
export declare class Content extends SectionContent {
    private readonly csvLoader;
    static preLoad(section: Section): Promise<any>[];
    constructor(section: Section, csvLoader: CsvLoader);
    titleExtra(): Vnode<any, any> | null;
    title(): string;
    getView(): Vnode<any, any>;
}
