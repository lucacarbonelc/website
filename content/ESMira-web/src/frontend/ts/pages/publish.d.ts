import { SectionContent } from "../site/SectionContent";
import { Vnode } from "mithril";
import { Section } from "../site/Section";
export declare class Content extends SectionContent {
    private readonly selectedIndex;
    private qrSize;
    private currentUrl;
    private allUrls;
    static preLoad(section: Section): Promise<any>[];
    title(): string;
    private checkAccessKeyFormat;
    private addAccessKey;
    private removeAccessKey;
    private changeQrSize;
    private changeQrUrl;
    private onPointerEnterUrl;
    private onPointerLeaveUrl;
    private getUrlViewAndCacheUrl;
    getView(): Vnode<any, any>;
    private getPublishView;
    private getUrlListAndCacheUrls;
}
