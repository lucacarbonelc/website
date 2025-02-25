import { MerlinToken } from "./merlinTokens";
export declare class MerlinScanner {
    source: string;
    constructor(source: string);
    private start;
    private current;
    private line;
    private tokens;
    errors: ScanningError[];
    scanTokens(): Array<MerlinToken>;
    hadErrors(): boolean;
    private scanToken;
    private isAtEnd;
    private advance;
    private addToken;
    private match;
    private peek;
    private peekNext;
    private string;
    private number;
    private identifier;
    private isLetter;
    private isDigit;
}
export declare class ScanningError {
    line: number;
    message: string;
    constructor(line: number, message: string);
}
