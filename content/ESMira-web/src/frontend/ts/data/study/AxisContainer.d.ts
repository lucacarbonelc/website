import { ObservableStructure } from "../../observable/ObservableStructure";
import { AxisData } from "./AxisData";
import { JsonTypes } from "../../observable/types/JsonTypes";
import { CsvLoader } from "../../loader/csv/CsvLoader";
export declare class AxisContainer extends ObservableStructure {
    color: import("../../observable/BaseObservable").BaseObservable<string>;
    label: import("../../observable/BaseObservable").BaseObservable<string>;
    xAxis: AxisData;
    yAxis: AxisData;
    static getPerDayAxisCodeFromValueList(csvLoader: CsvLoader, columnKey: string): Promise<Record<string, JsonTypes>[]>;
}
