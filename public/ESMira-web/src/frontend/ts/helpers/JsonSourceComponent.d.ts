import { Study } from "../data/study/Study";
import { ObservableStructureDataType } from "../observable/ObservableStructure";
import { Component, Vnode, VnodeDOM } from "mithril";
import { Mode } from "vanilla-jsoneditor";
interface JsonSourceComponentOptions {
    getStudy?: () => Study;
    setJson: (json: ObservableStructureDataType) => void;
    showMainMenuBar?: boolean;
    mode?: Mode;
    saveBtnLabel?: string;
}
export declare class JsonSourceComponent implements Component<JsonSourceComponentOptions, any> {
    private hasChanged;
    private editor?;
    private setJson?;
    private getStudy?;
    private studyObserveId?;
    private saveBtnLabel?;
    private getJson;
    private getJsonContent;
    oncreate(vNode: VnodeDOM<JsonSourceComponentOptions, any>): void;
    onremove(): void;
    private clickApply;
    view(): Vnode<any, any>;
}
export {};
