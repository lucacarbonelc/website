import { SectionContent } from "../site/SectionContent";
import { Vnode } from "mithril";
import { Section } from "../site/Section";
interface RewardCodeData {
    rewardCodes: string[];
    userIdsWithRewardCode: string[];
    userIdsWithoutRewardCode: string[];
}
export declare class Content extends SectionContent {
    private readonly rewardCodeData;
    private codeResponse;
    private readonly currentCode;
    static preLoad(section: Section): Promise<any>[];
    constructor(section: Section, rewardCodeData: RewardCodeData);
    title(): string;
    private checkCode;
    private selectRewardCode;
    getView(): Vnode<any, any>;
    destroy(): void;
}
export {};
