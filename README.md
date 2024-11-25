In Player Episode Preview
====================
## About ##
This plugin adds an episode list to the video player, which allows you to preview every episode of the TV show without having to leave the player.

This modification has support for the following clients:
* [Jellyfin Web Client](https://github.com/jellyfin/jellyfin-web)
* [Jellyfin Media Player](https://github.com/jellyfin/jellyfin-media-player) (JMP) Desktop Client

### Features ###
* List all episodes of a season
* Switch between seasons
* Shows episode title, description, thumbnail and playback progress
* Shows episode details like community ranking
* Mark episodes as played or favourite
* Start a new episode
* Should work with custom themes

## Preview ##
<img src="https://github.com/Namo2/InPlayerEpisodePreview/blob/master/Images/preview.gif" width="550" height="450">

Used Theme: (SkinManager) Kaleidochromic
<br>
This preview is missing the new buttons for marking an episode as completed or favourite.

## Installation ##

### Jellyfin Web Client (Server) ###
1. Add the manifest `https://raw.githubusercontent.com/Namo2/InPlayerEpisodePreview/master/manifest.json` as a Jellyfin plugin repository to your server.
2. Install the plugin `InPlayerEpisodePreview` from the repository.
3. Restart the Jellyfin server.

<br/>

### Jellyfin Media Player (JMP) Desktop Client ###
### **Deprecated with JMP Version [1.11.0](https://github.com/jellyfin/jellyfin-media-player/releases/tag/v1.11.0)** ###
Because the new JMP client is using the current web player from the server itself, it is no longer needed to make any changes to the client code directly.

This is the recommended way to install the script on the desktop client.
If you don't feel comfortable editing the nativeshell.js file yourself (step 3 to 6), you can download the full release instead, which includes the script already added to the nativeshell.js file.
It is yet unclear if there could be potential issues, replacing the nativeshell.js file with the one from the release, so it is recommended to follow all steps below.

1. Download the latest release [JMP](https://github.com/Namo2/InPlayerEpisodePreview/releases/download/v1.1.0.0/inPlayerEpisodePreview-1.1.0.0-jmp.zip) or [JMP-full](https://github.com/Namo2/InPlayerEpisodePreview/releases/download/v1.1.0.0/inPlayerEpisodePreview-1.1.0.0-jmp-full.zip) (includes the script already added to the nativeshell.js file)
2. Extract the zip file into your Jellyfin directory (e.g. C:\Program Files\Jellyfin\Jellyfin Media Player)
3. Inside your Jellyfin directory follow the folder path "web-client\extension"
4. Open the "nativeshell.js" file in a text editor.
5. Inside the file find the section `const plugins = [];`. Add a new line at the start of the list and paste in `'inPlayerEpisodePreviewPlugin',`. The section should now look similar to this:
```javascript
const plugins = [
    'inPlayerEpisodePreviewPlugin',
    'mpvVideoPlayer',
    'mpvAudioPlayer',
    'jmpInputPlugin',
    'jmpUpdatePlugin',
    'jellyscrubPlugin',
    'skipIntroPlugin'
];
```
6. Save the file and restart the JMP client.

## Troubleshooting ##

### 1. The preview button isn't visible ###
This is most likely related to wrong permissions on the `index.html` file. To fix this, you need to `chmod 666` this file, and restart jellyfin after that.
If you're running jellyfin in a docker container, use this command (assuming the container is called `jellyfin`):
```
docker exec -it jellyfin chmod 666 /usr/share/jellyfin/web/index.html && docker restart jellyfin
```
You can run this as a cron job on system startup.

If this does not work, please follow the discussion in [this](https://github.com/Namo2/InPlayerEpisodePreview/issues/10) issue.

<br/>
If you encounter any error which you can't solve yourself, feel free to open up an issue.
<br/>Please keep in mind that any system is different which can lead to unexpected behaviour, so add as much information about it as possible.
<br/>Jellyfin logs and console logs from the browser (prefixed as [InPlayerEpisodePreview]) are always useful.

## Drawbacks ##
* The plugin will download some extra data like the episode description from the server.

## Credits ##
The plugin structure is based and inspired on the [Jellyscrub](https://github.com/nicknsy/jellyscrub) plugin by [NickNSY](https://github.com/nicknsy).
