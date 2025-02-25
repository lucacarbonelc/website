export declare class SharedForObservable {
    observerContainer: Record<string, Record<number, (...args: any[]) => void>>;
    idCounter: number;
}
