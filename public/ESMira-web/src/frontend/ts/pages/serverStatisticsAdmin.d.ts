import { Vnode } from "mithril";
import { Section } from "../site/Section";
import { ServerStatistics } from "../data/serverStatistics/ServerStatistics";
import { Content as ServerStatisticsContent } from "../pages/serverStatistics";
export declare class Content extends ServerStatisticsContent {
    private tabIndex;
    private readonly lastActivitiesList;
    private readonly usedSpaceList;
    private readonly totalUsedSpace;
    static preLoad(section: Section): Promise<any>[];
    constructor(section: Section, serverStatistics: ServerStatistics, lastActivities: Record<number, number>, usedSpace: Record<number, number>);
    private setAppVersionChartAndPromise;
    private getReadableByteSize;
    getView(): Vnode<any, any>;
}
