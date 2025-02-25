export interface RequestType {
    get: string;
    post: string;
}
export declare const Requests: {
    loadRaw(url: string, type?: keyof RequestType, requestData?: string): Promise<string>;
    loadJson(url: string, type?: keyof RequestType, requestData?: string): Promise<any>;
};
