@echo off

REM Flags
set version="2.0.0.0"

REM Create build directory
if not exist ".build" mkdir .build

REM Compile Web code
echo "Building Web Code"
call npx webpack --config webpack.config.js

echo "Copying Web file to .build"
echo F|xcopy /Y /I Web\InPlayerPreview.js .build\web-client-script.js

cd .build

REM Packaging -- tar command needs Windows 10 or later
echo "Packaging Web Client Script"
"..\BuildFiles\7za.exe" a -tzip "InPlayerEpisodePreview-%version%-web-client-script.zip" "web-client-script.js"

REM TODO Rebuild the DLL here
echo "Packaging Server dll"
"..\BuildFiles\7za.exe" a -tzip "InPlayerEpisodePreview-%version%-server.zip" "..\bin\Release\net8.0\Namo.Plugin.InPlayerEpisodePreview.dll"

REM Cleanup -- Keep release zip files
del /q /s web-client-script.js
rmdir /q /s web-client

cd ..