import { SectionContent } from "../site/SectionContent";
import { Vnode } from "mithril";
import { Section } from "../site/Section";
import { AccountsLoader } from "../loader/AccountsLoader";
export declare class Content extends SectionContent {
    private accountsLoader;
    static preLoad(section: Section): Promise<any>[];
    constructor(section: Section, accountsLoader: AccountsLoader);
    title(): string;
    private createAccount;
    private deleteAccount;
    getView(): Vnode<any, any>;
}
