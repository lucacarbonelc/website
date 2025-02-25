import { SectionContent } from "../site/SectionContent";
import { Vnode } from "mithril";
import { RssItem } from "../singletons/RssFetcher";
import { Section } from "../site/Section";
export declare class Content extends SectionContent {
    private readonly addDropdownMenus;
    private rssItems;
    static preLoad(section: Section): Promise<any>[];
    constructor(section: Section, rssItems: RssItem[]);
    title(): string;
    private addStudy;
    private logout;
    private editBookmark;
    private bookmarkList;
    getView(): Vnode<any, any>;
}
