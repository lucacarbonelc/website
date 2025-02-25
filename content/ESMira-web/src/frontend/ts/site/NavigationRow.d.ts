import { Section } from "./Section";
import { SiteData } from "./SiteData";
export declare class NavigationRow {
    private readonly view;
    private readonly pages;
    private widthPercent;
    private posRightPercent;
    private siteData;
    constructor(view: HTMLElement, pages: Array<Section>, siteData: SiteData);
    positionNavi(percent: number): void;
    private eventClick;
    private eventPointerEnter;
    private eventPointerLeave;
    private getSectionEntry;
    private getCurrentSectionEntry;
    private getAlternativeLink;
    private getAlternativeContent;
    private renderView;
}
