import { SectionContent } from "../site/SectionContent";
import { Vnode } from "mithril";
import { Section } from "../site/Section";
import { CsvLoader } from "../loader/csv/CsvLoader";
export declare class Content extends SectionContent {
    private csvLoader;
    private monthsCount;
    private refererList;
    private userAgentList;
    private readonly totalChart;
    private readonly perMonthsChart;
    private readonly totalChartPromise;
    private readonly perMonthsPromise;
    static preLoad(section: Section): Promise<any>[];
    constructor(section: Section, csvLoader: CsvLoader);
    preInit(): Promise<any>;
    title(): string;
    titleExtra(): Vnode<any, any> | null;
    private createPieChartData;
    private getDayPerMonthAxisContainerCode;
    private createPerMonthChartData;
    private loadFixedStatistics;
    private reloadDynamicStatistics;
    getView(): Vnode<any, any>;
    private getValueListView;
}
