import { SiteData } from "./SiteData";
export declare class Site {
    readonly siteData: SiteData;
    readonly serverVersion: number;
    private readonly startHash;
    private readonly sectionsView;
    private readonly sections;
    private readonly navigationRow;
    private sectionWidthPercent;
    private overrideSectionWidth;
    constructor(serverName: string, startHash: string, serverVersion: number, packageVersion: string, serverAccessKey: string);
    private updateSectionDimensions;
    private addSectionToIndex;
    private removeSection;
    renderView(): void;
    reload(): Promise<any>;
    private updateHighlightedLinksCss;
    private onhashchange;
}
