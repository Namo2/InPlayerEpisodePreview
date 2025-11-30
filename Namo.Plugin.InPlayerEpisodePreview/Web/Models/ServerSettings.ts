export type ServerSettings = {
    MinResumePct: number, 
    MaxResumePct: number, 
    MinResumeDurationSeconds: number
}

export const DefaultServerSettings: ServerSettings = {
    MinResumePct: 5,
    MaxResumePct: 90,
    MinResumeDurationSeconds: 300
}