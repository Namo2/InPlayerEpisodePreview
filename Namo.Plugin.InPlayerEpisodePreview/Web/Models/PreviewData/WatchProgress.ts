import {formatWatchedCount, Group, UNKNOWN_WATCHED_COUNT} from "./Group";
import {WatchCountDisplayMode} from "../WatchCountDisplayMode";

const TICKS_PER_SECOND = 10_000_000

const getTimeString = (ticks: number, mode: WatchCountDisplayMode): string => {
    const seconds = ticks / TICKS_PER_SECOND
    const totalMinutes = Math.floor(seconds / 60)
    const totalHours = Math.floor(totalMinutes / 60)
    const totalDays = Math.floor(totalHours / 24)
    const totalMonths = Math.floor(totalDays / 30)
    const totalYears = Math.floor(totalDays / 365)

    if (mode === WatchCountDisplayMode.HoursMinutes) {
        if (totalHours >= 1) {
            const minutes = totalMinutes % 60
            return minutes > 0 ? `${totalHours}h ${minutes}m` : `${totalHours}h`
        }
        return totalMinutes > 0 ? `${totalMinutes}m` : '0m'
    }

    if (totalYears >= 1) {
        const months = Math.floor((totalDays % 365) / 30)
        return months > 0 ? `${totalYears}y ${months}mo` : `${totalYears}y`
    }
    if (totalMonths >= 1) {
        const days = totalDays % 30
        return days > 0 ? `${totalMonths}mo ${days}d` : `${totalMonths}mo`
    }
    if (totalDays >= 1) {
        const hours = totalHours % 24
        return hours > 0 ? `${totalDays}d ${hours}h` : `${totalDays}d`
    }
    if (totalHours >= 1) {
        const minutes = totalMinutes % 60
        return minutes > 0 ? `${totalHours}h ${minutes}m` : `${totalHours}h`
    }
    return totalMinutes > 0 ? `${totalMinutes}m` : '0m'
}

const clampProgress = (progress: number): number => Math.max(0, Math.min(100, Math.round(progress)))

export const getWatchProgressPercent = (group: Group, mode: WatchCountDisplayMode): number => {
    if (mode === WatchCountDisplayMode.Count) {
        if (!group.totalItemCount) return 0
        return clampProgress((group.playedItemCount / group.totalItemCount) * 100)
    }

    if (!group.totalRuntimeTicks) return 0
    return clampProgress((group.playedRuntimeTicks / group.totalRuntimeTicks) * 100)
}

export const isWatchedCountUnknown = (group: Group, mode: WatchCountDisplayMode): boolean => {
    if (group.playedItemCount === UNKNOWN_WATCHED_COUNT || group.totalItemCount === UNKNOWN_WATCHED_COUNT)
        return true

    return mode !== WatchCountDisplayMode.Count
        && (group.playedRuntimeTicks === UNKNOWN_WATCHED_COUNT || group.totalRuntimeTicks === UNKNOWN_WATCHED_COUNT)
}

export const formatWatchedCountText = (group: Group, mode: WatchCountDisplayMode): string => {
    if (mode === WatchCountDisplayMode.Count)
        return formatWatchedCount(group.playedItemCount, group.totalItemCount)

    if (mode === WatchCountDisplayMode.Percentage)
        return `${getWatchProgressPercent(group, mode)}%`

    const safeTotal = Math.max(0, group.totalRuntimeTicks || 0)
    const safePlayed = Math.max(0, Math.min(safeTotal, group.playedRuntimeTicks || 0))
    return `${getTimeString(safePlayed, mode)} / ${getTimeString(safeTotal, mode)}`
}

// Ported from https://github.com/n00bcodr/Jellyfin-Enhanced/blob/main/Jellyfin.Plugin.JellyfinEnhanced/js/enhanced/itemdetails/features-details-media-info.js
const getWatchProgressIconHtml = (progress: number): string => {
    const circumference = 2 * Math.PI * 8 // radius = 8
    const offset = circumference - (progress / 100) * circumference

    if (progress >= 100) {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" style="margin-right: 0.3em; display: inline-block; vertical-align: middle; flex-shrink: 0;">
            <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="2"/>
            <path d="M9.5 15.5l-3-3 1.4-1.4L9.5 12.7l5.6-5.6 1.4 1.4z" fill="currentColor"/>
        </svg>`
    }

    return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" style="margin-right: 0.3em; display: inline-block; vertical-align: middle; flex-shrink: 0;">
        <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="2" opacity="0.2"/>
        <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="2"
            style="stroke-dasharray: ${circumference}; stroke-dashoffset: ${offset}; transform: rotate(-90deg); transform-origin: 50% 50%;"/>
    </svg>`
}

export const renderWatchedCountInnerHtml = (group: Group, mode: WatchCountDisplayMode): string => {
    if (isWatchedCountUnknown(group, mode))
        return `${getWatchProgressIconHtml(0)}<span class="previewGroupWatchedCountText">,,,</span>`

    const progress = getWatchProgressPercent(group, mode)
    return `${getWatchProgressIconHtml(progress)}<span class="previewGroupWatchedCountText">${formatWatchedCountText(group, mode)}</span>`
}
