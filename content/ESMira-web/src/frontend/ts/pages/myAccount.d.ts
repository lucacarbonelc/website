import { SectionContent } from "../site/SectionContent";
import { Vnode } from "mithril";
import { Section } from "../site/Section";
interface LoginToken {
    lastUsed: number;
    tokenId: string;
    current: boolean;
}
export declare class Content extends SectionContent {
    private loginToken;
    static preLoad(_section: Section): Promise<any>[];
    constructor(section: Section, loginToken: LoginToken[]);
    title(): string;
    private sortLoginToken;
    private changeAccountName;
    private changePassword;
    private removeLoginToken;
    getView(): Vnode<any, any>;
}
export {};
