@echo off
cd /d "%~dp0"

set ffmpegPath=%cd%\node_modules\ffmpeg-static\bin\win32\x64\ffmpeg.exe
set videoIn=sequence2.mp4
set videoOut=sequence2_cropped.mp4

REM Crop video to hide watermark - removing top 80 pixels
REM This assumes video is 1920x1080 or similar; crops off top part
"%ffmpegPath%" -i "%videoIn%" -vf "crop=1920:1000:0:80" -c:a copy "%videoOut%"

if %errorlevel% equ 0 (
    echo Cropped video created: %videoOut%
    move /y "%videoIn%" "%videoIn%.bak"
    move /y "%videoOut%" "%videoIn%"
    echo Original backed up to: %videoIn%.bak
) else (
    echo Error during cropping
)
