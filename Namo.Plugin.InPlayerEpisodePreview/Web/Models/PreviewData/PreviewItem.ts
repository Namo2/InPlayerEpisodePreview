import {UserData} from "./UserData";

export type PreviewItem = {
    Id: string
    Name: string
    ServerId: string
    IndexNumber: number
    RunTimeTicks: number
    PremiereDate: string
    CommunityRating?: number
    CriticRating?: number
    Description?: string
    PrimaryImageTag?: string
    UserData: UserData
}
