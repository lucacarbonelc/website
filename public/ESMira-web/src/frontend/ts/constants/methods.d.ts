export declare function safeConfirm(msg: string): boolean;
export declare function checkString(s: string): boolean;
export declare function getBaseDomain(): string;
export declare function getBaseUrl(protocol?: string): string;
export declare function createAppUrl(accessKey: string, id: number, alwaysAddId?: boolean, protocol?: string): string;
export declare function createStudyUrl(accessKey: string, id: number, alwaysAddId?: boolean, protocol?: string): string;
export declare function createQuestionnaireUrl(accessKey: string, qId: number, protocol?: string): string;
export declare function getMidnightMillis(timestamp?: number): number;
export declare function timeStampToTimeString(timestamp: number): string;
