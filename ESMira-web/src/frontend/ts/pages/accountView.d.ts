import { SectionContent } from "../site/SectionContent";
import { Vnode } from "mithril";
import { Section } from "../site/Section";
import { AccountsLoader } from "../loader/AccountsLoader";
export declare class Content extends SectionContent {
    private accountsLoader;
    private readonly isOwnAccount;
    private showPasswordField;
    static preLoad(section: Section): Promise<any>[];
    constructor(section: Section, accountsLoader: AccountsLoader);
    title(): string;
    private getAccount;
    private changeUsername;
    private changePassword;
    private toggleAdmin;
    private toggleCreate;
    private addPermission;
    private removePermission;
    getView(): Vnode<any, any>;
    private getListPermissionView;
}
