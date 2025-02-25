import { SectionContent } from "../site/SectionContent";
import { Vnode } from "mithril";
import { ChartData } from "../data/study/ChartData";
import { Section } from "../site/Section";
export declare abstract class ChartEditSectionContent extends SectionContent {
    abstract getChart(): ChartData;
}
export declare class Content extends ChartEditSectionContent {
    private calcChart;
    private readonly isCalc;
    static preLoad(section: Section): Promise<any>[];
    constructor(section: Section);
    title(): string;
    titleExtra(): Vnode<any, any> | null;
    getChart(): ChartData;
    private copyAxisContainer;
    private removeAxisContainer;
    private removeCondition;
    private addCondition;
    private addVariable;
    private getConditionVariables;
    getView(): Vnode<any, any>;
    private getVariablesView;
    private getAxisView;
}
