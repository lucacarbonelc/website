import { CsvRow } from "./CsvRow";
import { CsvSpecialType } from "./CsvSpecialType";
export declare class CsvCell {
    readonly row: CsvRow;
    value: string;
    realValue: string;
    special: boolean;
    specialType?: CsvSpecialType;
    constructor(row: CsvRow, value: string, realValue: string, specialType?: CsvSpecialType);
}
export interface CsvCellsWithMeta {
    cells: CsvCell[];
    meta: {
        visible: boolean;
    };
}
