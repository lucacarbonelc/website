export declare const PromiseCache: {
    save<T>(key: string, promise: Promise<T>): Promise<T>;
    get<T_1>(key: string, createPromise: () => Promise<T_1>): Promise<T_1>;
    exists(key: string): boolean;
    remove(key: string): void;
};
