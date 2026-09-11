import {UserData} from "./UserData";

export type PreviewItem = {
    Id: string
    Name: string
    ServerId: string
    IndexNumber: number
    IndexNumberEnd?: number
    RunTimeTicks: number
    PremiereDate: string
    CommunityRating?: number
    CriticRating?: number
    Description?: string
    PrimaryImageTag?: string
    UserData: UserData
}
