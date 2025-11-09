import {BaseItem} from "./Episode";

export enum PlayMethod {
    Transcode = 0,
    DirectStream = 1,
    DirectPlay = 2
}

export enum RepeatMode {
    RepeatNone = 0,
    RepeatAll = 1,
    RepeatOne = 2
}

export enum PlaybackOrder {
    Default = 0,
    Shuffle = 1
}

export type QueueItem = {
    Id: string;
    PlaylistItemId: string;
}

export type PlaybackProgressInfo = {
    CanSeek: boolean;
    Item: BaseItem;
    ItemId: string;
    SessionId: string;
    MediaSourceId: string;
    AudioStreamIndex: number | null;
    SubtitleStreamIndex: number | null;
    IsPaused: boolean;
    IsMuted: boolean;
    PositionTicks: number | null;
    PlaybackStartTimeTicks: number | null;
    VolumeLevel: number | null;
    Brightness: number | null;
    AspectRatio: string;
    PlayMethod: PlayMethod;
    LiveStreamId: string;
    PlaySessionId: string;
    RepeatMode: RepeatMode;
    PlaybackOrder: PlaybackOrder;
    NowPlayingQueue: QueueItem[];
    PlaylistItemId: string;
}