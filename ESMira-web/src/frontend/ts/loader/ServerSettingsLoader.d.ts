import { ServerData } from "../data/serverDataTypes/ServerData";
export declare class ServerSettingsLoader {
    private settings?;
    init(): Promise<ServerSettingsLoader>;
    getSettings(): ServerData;
    saveSettings(): Promise<void>;
}
