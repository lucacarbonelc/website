import { SectionContent } from "../site/SectionContent";
import { Vnode } from "mithril";
import { Section } from "../site/Section";
interface FolderData {
    dirBase: string;
    dataFolderExists: boolean;
}
export declare class Content extends SectionContent {
    private readonly htaccessEnabled;
    private readonly modRewriteEnabled;
    private folderData;
    private reuseFolder;
    static preLoad(_section: Section): Promise<any>[];
    constructor(section: Section, folderData: FolderData, serverData: {
        htaccess: boolean;
        modRewrite: boolean;
    });
    title(): string;
    private changeDataLocation;
    private createESMira;
    getView(): Vnode<any, any>;
}
export {};
