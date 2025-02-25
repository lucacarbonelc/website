import { Study } from "../data/study/Study";
import { Questionnaire } from "../data/study/Questionnaire";
import { JsonTypes } from "../observable/types/JsonTypes";
import { Page } from "../data/study/Page";
import { TranslatableObjectRecord } from "../observable/ObservableRecord";
import { ObservableStructureDataType } from "../observable/ObservableStructure";
export type StudiesDataType = TranslatableObjectRecord<number, Study>;
export interface StudyMetadata {
    owner: string;
    lastSavedBy: string;
    lastSavedAt: number;
    createdTimestamp: number;
}
export interface StudyDataFromServer extends StudyMetadata {
    id: number;
    [key: string]: JsonTypes;
}
export declare class StudyLoader {
    private readonly studyCache;
    private readonly questionnaireRegister;
    private readonly observerIds;
    private readonly serverVersion;
    private readonly packageVersion;
    private readonly repair;
    readonly ownerRegister: Record<string, number[]>;
    readonly studyMetadata: Record<number, StudyMetadata>;
    constructor(serverVersion: number, packageVersion: string);
    private updateMetadata;
    private removeFromMetadata;
    loadStrippedStudyList(): Promise<StudiesDataType>;
    loadAvailableStudies(accessKey: string, reload?: boolean): Promise<StudiesDataType>;
    removeStudyFromCache(id: number): void;
    loadFullStudy(id: number, lastChanged?: number): Promise<Study>;
    hasUnsavedStudy(): boolean;
    getStudyIdFromQuestionnaireId(qId: number): Promise<number>;
    getStudies(): StudiesDataType;
    getSortedStudyList(studyList?: Study[]): Study[];
    addStudy(studyData: ObservableStructureDataType): Promise<number | null>;
    updateStudy(oldStudy: Study, newStudy: Study): Study;
    updateStudyJson(study: Study, data: ObservableStructureDataType): Study;
    deleteStudy(study: Study): Promise<void>;
    addQuestionnaire(study: Study, questionnaireData: ObservableStructureDataType): Promise<Questionnaire>;
    autoValidateQuestionnaire(study: Study, questionnaire: Questionnaire): void;
    autoValidatePage(study: Study, page: Page): void;
    saveStudy(study: Study): Promise<void>;
    publishStudy(study: Study): Promise<void>;
}
