import { StatisticsCollection } from "../../data/statistics/StatisticsCollection";
import { CsvData } from "./CsvWorker";
import { AxisContainer } from "../../data/study/AxisContainer";
export declare class StatisticsCreator {
    private csvData;
    constructor(csvData: CsvData);
    private getStorageType;
    private addTimedStatisticsEntryData;
    private addFreqDistrEntryData;
    private addPerDataEntryData;
    private statisticConditionsAreMet;
    private createDataFromAxis;
    create(axisContainerArray: AxisContainer[], dataType: number): StatisticsCollection;
}
