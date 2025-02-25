import { Study } from "../data/study/Study";
export declare function createUniqueName(study: Study, originalName?: string | null, createNewName?: (oldName: string) => string | null): string | null;
