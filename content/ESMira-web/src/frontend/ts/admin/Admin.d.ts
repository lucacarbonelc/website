import { AdminToolsInterface } from "./AdminToolsInterface";
import { Site } from "../site/Site";
export declare class Admin {
    private isEnabled;
    private isLoggedInState;
    private tools?;
    private readonly site;
    constructor(isEnabled: boolean, site: Site);
    enableAdmin(): void;
    disableAdmin(): void;
    init(): Promise<boolean>;
    private processLoginData;
    isLoggedIn(): boolean;
    login(accountName: string, password: string, rememberMe: boolean): Promise<boolean>;
    getTools(): AdminToolsInterface;
    logout(): Promise<void>;
}
