import { SectionContent } from "../site/SectionContent";
import { Vnode } from "mithril";
import { Section } from "../site/Section";
export declare class Content extends SectionContent {
    private readonly connectedSection;
    private readonly randomContent;
    private readonly csvLoaderCollection;
    private readonly promise;
    private readonly chartObserverId;
    static preLoad(section: Section): Promise<any>[];
    constructor(section: Section, connectedSection: Section);
    title(): string;
    titleExtra(): Vnode<any, any> | null;
    private loadStatistics;
    private addRandomValues;
    private addTimeVariables;
    private fillAxisContainer;
    private createRandomCsv;
    private getRandomInt;
    getView(): Vnode<any, any>;
    destroy(): void;
}
