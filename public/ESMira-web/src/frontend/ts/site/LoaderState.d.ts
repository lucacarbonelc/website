import { Vnode } from "mithril";
import { RequestType } from "../singletons/Requests";
export declare class LoaderState {
    private isEnabled;
    private isVisible;
    private isError;
    private hasAnimation;
    private hasTryAgainBtn;
    private stateMsg;
    private animationId;
    private tryAgainCallback;
    private enableCount;
    getView(): Vnode<any, any>;
    private updateView;
    closeLoader(): void;
    showMessage(s: string | null): void;
    private disable;
    update(s: string): void;
    showLoader(promise: Promise<any>, msg?: string): Promise<any>;
    info(s: string): void;
    error(s: string, tryAgain?: () => void): void;
    loadRaw(url: string, type?: keyof RequestType, requestData?: string): Promise<string>;
    loadJson(url: string, type?: keyof RequestType, requestData?: string): Promise<any>;
}
