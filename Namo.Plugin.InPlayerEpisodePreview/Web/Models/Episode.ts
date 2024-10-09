export type ItemDto = {
    Items: BaseItem[];
    TotalRecordCount: number;
    StartIndex: number;
}

export type BaseItem = {
    Name: string
    ServerId: string
    Id: string
    Container: string
    PremiereDate: string
    ChannelId: any
    CommunityRating: number
    RunTimeTicks: number
    ProductionYear: number
    IndexNumber: number
    ParentIndexNumber: number
    IsFolder: boolean
    Type: string
    ParentLogoItemId: string
    ParentBackdropItemId: string
    ParentBackdropImageTags: string[]
    UserData: UserData
    VideoType: string
    ImageTags: ImageTags
    BackdropImageTags: any[]
    ParentLogoImageTag: string
    ImageBlurHashes: ImageBlurHashes
    Chapters: Chapter[]
    LocationType: string
    MediaType: string
    OfficialRating?: string
    Description?: string
    CriticRating?: number
    SeriesName?: string
    SeriesId?: string
    SeasonId?: string
    SeriesPrimaryImageTag?: string
    SeasonName?: string
}

export type UserData = {
    PlayedPercentage?: number
    PlaybackPositionTicks: number
    PlayCount: number
    IsFavorite: boolean
    LastPlayedDate?: string
    Played: boolean
    Key: string
}

export type ImageTags = {
    Primary: string
}

export type ImageBlurHashes = {
    Primary: Primary
    Logo: Logo
    Backdrop: Backdrop
}

export type Primary = {
    "97dcc421e6d5277bd204d6a0c2e1d7e9"?: string
    e84f38054f15760a5baab510e39d419f: string
    d3fb4a8e790b3f88641c30a427512026?: string
    "480f3f1d94da35e99188605e5793d02f"?: string
    a346c24d1f0e720096ad0ca4366d7e88?: string
    a3f5c5f69efa788eaf978a0d1ecbd2d3?: string
    fad924584418e5717f56dd20d3558c41?: string
    "01e81b9d91c99096267e71105e3e039f"?: string
    b411f7661ded5f53f038bb7f0ae9b2df?: string
    d8dfd3c627c53eb9c30d4a35f2aeb015?: string
    "8050a05aab1fb105efaa1bbdf8747cd1"?: string
    e6566df4b3c66c1bb0543bb7bc1e8ff9?: string
    "022a9c9e41863e8912e43ea45fc78280"?: string
    "5845bb9186ac30c041e336cbbace481d"?: string
    d631dd7deca13ac2757f01a37e34df0d?: string
    e2ab9a38ff2b5784e1f12fc10556b21b?: string
    "208a3803c1e44feeb76d0889fcaefa18"?: string
    "3f1102eee927b1e28279538e6f37df53"?: string
    "54d67999796aaa7749ef1b02b4bf327a"?: string
    "27bfaced308e8da104386c55a62823b7"?: string
    c4d9bf936687fa5ec9c006e10b59dc16?: string
}

export type Logo = {
    feddf6f18ae97abc608fdc453b02012e: string
}

export type Backdrop = {
    ed95d46d15bb158fa9bb6e126111fbd4: string
}

export type Chapter = {
    StartPositionTicks: number
    Name: string
    ImageDateModified: string
}
