import { Study } from "../data/study/Study";
import { Questionnaire } from "../data/study/Questionnaire";
export declare const StudyDataValues: {
    getQuestionnaireVariableNames(questionnaire: Questionnaire): string[];
    getQuestionnaireVariables(questionnaire: Questionnaire): string[];
    getStudyVariables(study: Study): string[];
};
