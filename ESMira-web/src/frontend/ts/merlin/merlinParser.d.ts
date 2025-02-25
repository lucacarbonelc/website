import { MerlinToken } from "./merlinTokens";
export declare class MerlinParser {
    private tokens;
    constructor(tokens: Array<MerlinToken>);
    errors: ParseError[];
    private current;
    parse(): Array<Stmt | null>;
    hadErrors(): boolean;
    private declaration;
    private function;
    private block;
    private statement;
    private forStatement;
    private ifStatement;
    private returnStatement;
    private whileStatement;
    private assignmentStatement;
    private initStatement;
    private expression;
    private or;
    private and;
    private equality;
    private comparison;
    private term;
    private factor;
    private sequence;
    private unary;
    private callChain;
    private call;
    private finishCall;
    private value;
    private primary;
    private advance;
    private isAtEnd;
    private peek;
    private previous;
    private match;
    private check;
    private consume;
    private synchronize;
}
export declare class ParseError {
    token: MerlinToken;
    message: string;
    constructor(token: MerlinToken, message: string);
}
declare class Stmt {
}
export {};
