import { CsvCell } from "./CsvCell";
export declare class CsvRow {
    readonly shownIndex: number;
    arrayIndex: number;
    readonly columnCells: CsvCell[];
    hiddenSum: number;
    visible: boolean;
    marked: boolean;
    constructor(arrayIndex: number, shownIndex: number, columnCells: CsvCell[]);
}
