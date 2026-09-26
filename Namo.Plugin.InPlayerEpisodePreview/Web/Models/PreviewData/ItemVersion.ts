import {PreviewItem} from "./PreviewItem";

export type ItemVersion = {
    Id: string
    Name?: string
    Item: PreviewItem
}

export type ItemVersionsResult = {
    Versions: ItemVersion[]
    // Version playing in the current session
    ActiveVersionId?: string
    HasUserDataPerVersion: boolean
}
