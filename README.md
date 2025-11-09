<div align="right">
  <details>
    <summary >🌐 Language</summary>
    <div>
      <div align="center">
        <p>The following translations were automatically generated using AI. Please note that they may include inaccuracies or reference older versions of this readme.</p>
        <a href="https://openaitx.github.io/view.html?user=Namo2&project=InPlayerEpisodePreview&lang=en">English</a>
        | <a href="https://openaitx.github.io/view.html?user=Namo2&project=InPlayerEpisodePreview&lang=zh-CN">简体中文</a>
        | <a href="https://openaitx.github.io/view.html?user=Namo2&project=InPlayerEpisodePreview&lang=zh-TW">繁體中文</a>
        | <a href="https://openaitx.github.io/view.html?user=Namo2&project=InPlayerEpisodePreview&lang=ja">日本語</a>
        | <a href="https://openaitx.github.io/view.html?user=Namo2&project=InPlayerEpisodePreview&lang=ko">한국어</a>
        | <a href="https://openaitx.github.io/view.html?user=Namo2&project=InPlayerEpisodePreview&lang=hi">हिन्दी</a>
        | <a href="https://openaitx.github.io/view.html?user=Namo2&project=InPlayerEpisodePreview&lang=th">ไทย</a>
        | <a href="https://openaitx.github.io/view.html?user=Namo2&project=InPlayerEpisodePreview&lang=fr">Français</a>
        | <a href="https://openaitx.github.io/view.html?user=Namo2&project=InPlayerEpisodePreview&lang=de">Deutsch</a>
        | <a href="https://openaitx.github.io/view.html?user=Namo2&project=InPlayerEpisodePreview&lang=es">Español</a>
        | <a href="https://openaitx.github.io/view.html?user=Namo2&project=InPlayerEpisodePreview&lang=it">Italiano</a>
        | <a href="https://openaitx.github.io/view.html?user=Namo2&project=InPlayerEpisodePreview&lang=ru">Русский</a>
        | <a href="https://openaitx.github.io/view.html?user=Namo2&project=InPlayerEpisodePreview&lang=pt">Português</a>
        | <a href="https://openaitx.github.io/view.html?user=Namo2&project=InPlayerEpisodePreview&lang=nl">Nederlands</a>
        | <a href="https://openaitx.github.io/view.html?user=Namo2&project=InPlayerEpisodePreview&lang=pl">Polski</a>
        | <a href="https://openaitx.github.io/view.html?user=Namo2&project=InPlayerEpisodePreview&lang=ar">العربية</a>
        | <a href="https://openaitx.github.io/view.html?user=Namo2&project=InPlayerEpisodePreview&lang=fa">فارسی</a>
        | <a href="https://openaitx.github.io/view.html?user=Namo2&project=InPlayerEpisodePreview&lang=tr">Türkçe</a>
        | <a href="https://openaitx.github.io/view.html?user=Namo2&project=InPlayerEpisodePreview&lang=vi">Tiếng Việt</a>
        | <a href="https://openaitx.github.io/view.html?user=Namo2&project=InPlayerEpisodePreview&lang=id">Bahasa Indonesia</a>
        | <a href="https://openaitx.github.io/view.html?user=Namo2&project=InPlayerEpisodePreview&lang=as">অসমীয়া</
      </div>
    </div>
  </details>
</div>

In Player Episode Preview
====================
## 📄 About
This plugin adds an episode list to the video player, which allows you to preview every episode of the TV show without having to leave the player.

This modification has support for the following clients:
* [Jellyfin Web Client](https://github.com/jellyfin/jellyfin-web)
* [Jellyfin Media Player](https://github.com/jellyfin/jellyfin-media-player) (JMP) Desktop Client

## ✨ Features
* List all episodes of a season
* Switch between seasons
* Shows episode title, description, thumbnail and playback progress
* Shows episode details like community ranking
* Mark episodes as played or favourite
* Start a new episode
* Should work with custom themes

## 📸 Preview
<img src="https://github.com/Namo2/InPlayerEpisodePreview/blob/master/Images/preview.gif" width="550" height="450">

Used Theme: (SkinManager) Kaleidochromic
<br>
This preview is missing the new buttons for marking an episode as completed or favourite.

## 🔧 Installation

### Jellyfin Web Client (Server)

> [!NOTE]
> It is highly recommended to have [file-transformation](https://github.com/IAmParadox27/jellyfin-plugin-file-transformation) at least v2.2.1.0 installed. It helps avoid permission issues while modifying index.html on any kind of installation!
<details open>
<summary> See instructions... </summary>

1. Add the manifest `https://raw.githubusercontent.com/Namo2/InPlayerEpisodePreview/master/manifest.json` as a Jellyfin plugin repository to your server.
2. Install the plugin `InPlayerEpisodePreview` from the repository.
3. Restart the Jellyfin server.
</details>

### Jellyfin Media Player (JMP) Desktop Client (Deprecated)
<details>
<summary> See instructions... </summary>

**Deprecated with JMP Version [1.11.0](https://github.com/jellyfin/jellyfin-media-player/releases/tag/v1.11.0)**

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
</details>

## 💡 Troubleshooting

### 1. The preview button isn't visible
This is most likely related to wrong permissions for the `index.html` file.

<details>
<summary> See a list of possible solutions... </summary>

#### 1.1 Avoid this issue by using the [file-transformation](https://github.com/IAmParadox27/jellyfin-plugin-file-transformation) plugin.

#### 1.2 Change Ownership inside a docker container
If you're running jellyfin in a docker container, you can change the ownership with thie following command
(replace jellyfin with your containername, user and group with the user and group of your container):
```
docker exec -it --user root jellyfin chown user:group /jellyfin/jellyfin-web/index.html && docker restart jellyfin
```
You can run this as a cron job on system startup.
(Thanks to [muisje](https://github.com/muisje) for helping with [this](https://github.com/Namo2/InPlayerEpisodePreview/issues/49#issue-2825745530) solution)

#### 1.3 Change Ownership running on a Windows installation
1. Navigate to: `C:\Program Files\Jellyfin\Server\jellyfin-web\`
2. Right-click on `index.html` → `Properties` → `Security tab` → Click on `Edit`
3. Select your user from the list and check the Write `permission` box.
4. Restart both the server and client.
   (Thanks to [xeuc](https://github.com/xeuc) for [this](https://github.com/Namo2/InPlayerEpisodePreview/issues/49#issuecomment-2746136069) solution)

If none of the above solutions work, please have a look at old issues. E.g. [here](https://github.com/Namo2/InPlayerEpisodePreview/issues/10) or [here](https://github.com/Namo2/InPlayerEpisodePreview/issues/49).
</details>

<br/>
<br/>
If you encounter any error which you can't solve yourself, feel free to open up an issue.
<br/>Please keep in mind that any system is different which can lead to unexpected behaviour, so add as much information about it as possible.
<br/>Jellyfin logs and console logs from the browser (prefixed as [InPlayerEpisodePreview]) are always useful.

## Credits
The plugin structure is based and inspired on the [Jellyscrub](https://github.com/nicknsy/jellyscrub) plugin by [NickNSY](https://github.com/nicknsy).