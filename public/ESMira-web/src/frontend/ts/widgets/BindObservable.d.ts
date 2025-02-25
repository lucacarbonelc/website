import { PrimitiveType } from "../observable/types/PrimitiveType";
import { BaseObservable } from "../observable/BaseObservable";
export interface Transformer {
    toAttribute(value: PrimitiveType): PrimitiveType;
    toObs(value: string, obs: BaseObservable<PrimitiveType>): PrimitiveType;
}
export declare class OnBeforeChangeTransformer<T extends PrimitiveType> implements Transformer {
    private readonly onBeforeChange;
    constructor(onBeforeChange: (before: T, after: T) => T);
    toAttribute(value: T): T;
    toObs(value: string, obs: BaseObservable<T>): T;
}
export declare const BooleanTransformer: Transformer;
export declare const DateTransformer: Transformer;
export declare const TimeTransformer: Transformer;
export declare function BindObservable(obs: BaseObservable<PrimitiveType>, transformer?: Transformer, attr?: keyof HTMLInputElement, event?: keyof HTMLInputElement): Record<string, any>;
