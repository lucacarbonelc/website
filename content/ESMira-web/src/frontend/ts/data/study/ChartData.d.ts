import { ObservableStructure } from "../../observable/ObservableStructure";
import { AxisContainer } from "./AxisContainer";
import { JsonTypes } from "../../observable/types/JsonTypes";
export declare class ChartData extends ObservableStructure {
    valueType: import("../../observable/BaseObservable").BaseObservable<number>;
    dataType: import("../../observable/BaseObservable").BaseObservable<number>;
    chartType: import("../../observable/BaseObservable").BaseObservable<number>;
    inPercent: import("../../observable/BaseObservable").BaseObservable<boolean>;
    xAxisIsNumberRange: import("../../observable/BaseObservable").BaseObservable<boolean>;
    maxYValue: import("../../observable/BaseObservable").BaseObservable<number>;
    displayPublicVariable: import("../../observable/BaseObservable").BaseObservable<boolean>;
    hideUntilCompletion: import("../../observable/BaseObservable").BaseObservable<boolean>;
    fitToShowLinearProgression: import("../../observable/BaseObservable").BaseObservable<number>;
    title: import("../../observable/BaseObservable").BaseObservable<string>;
    chartDescription: import("../../observable/BaseObservable").BaseObservable<string>;
    xAxisLabel: import("../../observable/BaseObservable").BaseObservable<string>;
    yAxisLabel: import("../../observable/BaseObservable").BaseObservable<string>;
    publicVariables: import("../../observable/TranslatableArray").TranslatableArray<import("../../observable/ObservableStructure").ObservableStructureDataType, AxisContainer>;
    axisContainer: import("../../observable/TranslatableArray").TranslatableArray<import("../../observable/ObservableStructure").ObservableStructureDataType, AxisContainer>;
    static createPerDayChartData(title: string, axisContainerArray?: JsonTypes[], dataType?: number): ChartData;
}
