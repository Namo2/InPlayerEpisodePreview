@echo off

REM Flags
set version="1.0.1.0"

REM Create build directory
if not exist ".build" mkdir .build

REM Compile Web code
set client=WEB

echo "Building Web Code"
call npx webpack --config webpack.config.js --env CLIENT=%client%

echo "Copying Web file to .build"
echo F|xcopy /Y /I Web\inPlayerPreview.js .build\web-client-script.js

REM Compile JMP code
set client=JMP

echo "Building JMP Code"
call npx webpack --config webpack.config.js --env CLIENT=%client%

echo "Copying JMP file to .build"
echo F|xcopy /Y /I Web\inPlayerPreview.js .build\jmp.js

echo "Creating JMP Plugin file"
@(for /f "delims=" %%i in (BuildFiles\jmpClientTemplate.js) do (
    set "line=%%i"
    SETLOCAL EnableExtensions EnableDelayedExpansion
    if not "!line:JMP_CLIENT_CODE=!" == "!line!" (
        SETLOCAL EnableExtensions DisableDelayedExpansion
        echo(
        @(for /f "delims=" %%j in (.build\jmp.js) do ( 
            set "line2=%%j"
            SETLOCAL EnableExtensions EnableDelayedExpansion
            echo(!line2!
            endlocal 
        ))
        set "line="
        endlocal
    )
    echo(!line!
    endlocal
))>".build\jmpPlugin.js"

REM Packaging -- tar command needs Windows 10 or later
echo "Packaging Web Client Script"
tar -cf .build\inPlayerEpisodePreview-%version%-web-client-script.zip -C .build web-client-script.js

REM TODO Rebuild the DLL here
echo "Packaging Server dll"
tar -cf .build\inPlayerEpisodePreview-%version%-server.zip -C bin\Release\net6.0 Namo.Plugin.InPlayerEpisodePreview.dll

echo "Packaging JMP Plugin"
echo F|xcopy /Y /I .build\jmpPlugin.js .build\web-client\extension\inPlayerEpisodePreviewPlugin.js
tar -cf .build\inPlayerEpisodePreview-%version%-jmp.zip -C .build web-client

echo "Packaging JMP-Full Plugin"
echo F|xcopy /Y /I BuildFiles\nativeshell.js .build\web-client\extension\nativeshell.js
tar -cf .build\inPlayerEpisodePreview-%version%-jmp-full.zip -C .build web-client

REM Cleanup -- Keep release zip files
del /q /s .build\jmp.js
del /q /s .build\jmpPlugin.js
del /q /s .build\web-client-script.js
rmdir /q /s .build\web-client