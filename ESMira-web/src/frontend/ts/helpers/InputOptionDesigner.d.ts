import { Vnode } from "mithril";
import { Input } from "../data/study/Input";
import { Study } from "../data/study/Study";
import { PossibleDevices } from "../widgets/NotCompatibleIcon";
declare const InputCategories: {
    passive: string;
    classic: string;
    special: string;
    sensor: string;
    media: string;
};
export interface InputEntry {
    title: string;
    helpUrl: string;
    category: keyof typeof InputCategories;
    notCompatible?: PossibleDevices[];
    view: () => Vnode<any, any>[];
}
export declare class InputOptionDesigner {
    readonly study: Study;
    readonly input: Input;
    readonly getUrl: (name: string) => string;
    readonly goTo: (name: string) => void;
    private readonly inputTypes;
    private readonly sortedInputTypeKeys;
    constructor(study: Study, input: Input, getUrl: (name: string) => string, goTo: (name: string) => void);
    private onlyRequiredAndDefaultOptions;
    private inputOptionElement;
    private checkedOptionElement;
    private urlOption;
    private requiredOption;
    private showValueOption;
    private defaultValueOption;
    private leftRightLabelOption;
    private itemsOption;
    private otherOption;
    private getEntry;
    getView(): Vnode<any, any> | null;
    createTypesView(categoryView: (title: string, inputViews: Vnode<any, any>[]) => Vnode<any, any>, inputView: (title: InputEntry, isActive: boolean, onclick: () => void) => Vnode<any, any> | null): Vnode<any, any>[];
}
export {};
