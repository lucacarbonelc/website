import { PrimitiveType } from "../observable/types/PrimitiveType";
import { ObservablePrimitive } from "../observable/ObservablePrimitive";
import { ObservablePrimitiveRecord } from "../observable/ObservableRecord";
export interface DynamicValues {
    showSaveButton: boolean;
    showPublishButton: boolean;
    accessKey: string;
    publicAccessKeyIndex: number;
    disabledAccessKeyIndex: number;
    studiesIndex: number;
    questionnaireIndex: number;
    pageIndex: number;
    joinTimestamp: number;
    owner: string;
}
export declare class DynamicValueContainer extends ObservablePrimitiveRecord<string, PrimitiveType> {
    constructor();
    getOrCreateObs<T extends PrimitiveType>(key: keyof DynamicValues, value: T): ObservablePrimitive<T>;
    getChild<T extends keyof DynamicValues>(key: T): DynamicValues[T] | null;
    setChild<T extends PrimitiveType>(key: keyof DynamicValues, value: T): ObservablePrimitive<T>;
}
