import { ObservableArray } from "../observable/ObservableArray";
import { ObservableStructureDataType } from "../observable/ObservableStructure";
import { MessageParticipantInfo } from "../data/messages/MessageParticipantInfo";
import { ObservablePrimitive } from "../observable/ObservablePrimitive";
import { LoginDataInterface } from "../admin/LoginDataInterface";
import { ParticipantMessagesContainer } from "../data/messages/ParticipantMessagesContainer";
export type MessageParticipantInfoList = ObservableArray<ObservableStructureDataType, MessageParticipantInfo>;
export declare class MessagesLoader {
    private messageParticipantInfoLists;
    readonly studiesWithNewMessagesCount: ObservablePrimitive<number>;
    readonly studiesWithNewMessagesList: Record<number, boolean>;
    constructor(data: LoginDataInterface);
    private hasUnread;
    getMessageParticipantInfoList(studyId: number): Promise<MessageParticipantInfoList>;
    getReloadedMessageParticipantInfoList(studyId: number): Promise<MessageParticipantInfoList>;
    getMessageParticipantInfoListOrThrow(studyId: number): MessageParticipantInfoList;
    private loadMessageParticipantInfoList;
    loadMessages(studyId: number, userId: string): Promise<ParticipantMessagesContainer>;
}
