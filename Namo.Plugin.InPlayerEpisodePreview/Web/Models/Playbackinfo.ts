export interface PlayBackInfo {
    MediaSources: MediaSource[]
    PlaySessionId: string
}

export interface MediaSource {
    Protocol: string
    Id: string
    Path: string
    Type: string
    Container: string
    Size: number
    Name: string
    IsRemote: boolean
    ETag: string
    RunTimeTicks: number
    ReadAtNativeFramerate: boolean
    IgnoreDts: boolean
    IgnoreIndex: boolean
    GenPtsInput: boolean
    SupportsTranscoding: boolean
    SupportsDirectStream: boolean
    SupportsDirectPlay: boolean
    IsInfiniteStream: boolean
    RequiresOpening: boolean
    RequiresClosing: boolean
    RequiresLooping: boolean
    SupportsProbing: boolean
    VideoType: string
    MediaStreams: MediaStream[]
    MediaAttachments: any[]
    Formats: any[]
    Bitrate: number
    RequiredHttpHeaders: RequiredHttpHeaders
    TranscodingUrl: string
    TranscodingSubProtocol: string
    TranscodingContainer: string
    DefaultAudioStreamIndex: number
    DefaultSubtitleStreamIndex: number
}

export interface MediaStream {
    Codec: string
    ColorSpace?: string
    ColorTransfer?: string
    ColorPrimaries?: string
    TimeBase: string
    VideoRange?: string
    VideoRangeType?: string
    DisplayTitle: string
    NalLengthSize?: string
    IsInterlaced: boolean
    IsAVC?: boolean
    BitRate: number
    BitDepth?: number
    RefFrames?: number
    IsDefault: boolean
    IsForced: boolean
    Height?: number
    Width?: number
    AverageFrameRate?: number
    RealFrameRate?: number
    Profile?: string
    Type: string
    AspectRatio?: string
    Index: number
    IsExternal: boolean
    IsTextSubtitleStream: boolean
    SupportsExternalStream: boolean
    PixelFormat?: string
    Level: number
    Language?: string
    ChannelLayout?: string
    Channels?: number
    SampleRate?: number
}

export interface RequiredHttpHeaders {}
