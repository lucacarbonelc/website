import { Study } from "../../data/study/Study";
import { LoaderState } from "../../site/LoaderState";
import { ChartData } from "../../data/study/ChartData";
import { StatisticsCollection } from "../../data/statistics/StatisticsCollection";
export interface LoadedStatistics {
    mainStatistics: StatisticsCollection;
    additionalStatistics?: StatisticsCollection;
}
export declare class CsvLoaderCollectionFromCharts {
    private readonly loaderState;
    private readonly study;
    private readonly variableGroupIndex;
    private readonly urlTemplate;
    private readonly personalStatistics;
    private readonly csvLoaders;
    private publicStatistics?;
    private charts;
    private needsPublicStatistics;
    constructor(loaderState: LoaderState, study: Study);
    setupLoadersForCharts(charts: ChartData[]): Promise<void>;
    private checkAxis;
    private addLoader;
    private combineStatistics;
    private addStatistics;
    loadStatisticsFromFiles(userName?: string, dontLoadPublicStatistics?: boolean): Promise<LoadedStatistics>;
}
