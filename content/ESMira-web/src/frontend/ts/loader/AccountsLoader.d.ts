import { ObservableArray } from "../observable/ObservableArray";
import { ObservableStructureDataType } from "../observable/ObservableStructure";
import { Account } from "../data/accounts/Account";
export type AccountList = ObservableArray<ObservableStructureDataType, Account>;
export declare class AccountsLoader {
    private accounts?;
    init(): Promise<AccountsLoader>;
    getAccounts(): Account[];
    addAccount(accountName: string, password: string): Promise<number>;
    deleteAccount(account: Account, index: number): Promise<boolean>;
}
