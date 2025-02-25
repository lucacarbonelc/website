import { LoginDataInterface } from "../admin/LoginDataInterface";
import { ObservablePrimitive } from "../observable/ObservablePrimitive";
export declare class MerlinLogsLoader {
    readonly studiesWithNewMerlinLogsCount: ObservablePrimitive<number>;
    readonly studiesWithNewMerlinLogsList: Record<number, boolean>;
    constructor(data: LoginDataInterface);
    setStudyNewLogsRemaining(studyId: number, logsRemaining: boolean): void;
}
