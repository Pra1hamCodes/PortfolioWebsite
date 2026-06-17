@echo off
cd /d c:\Users\pande\PortfolioWebsite
echo Cropping sequence2.mp4 to remove watermark...
node_modules\ffmpeg-static\bin\win32\x64\ffmpeg.exe -i sequence2.mp4 -vf "crop=in_w:in_h-100" -c:a copy sequence2_cropped.mp4 -y
if %errorlevel% equ 0 (
    echo Backup original...
    move sequence2.mp4 sequence2.mp4.bak
    echo Replace with cropped version...
    move sequence2_cropped.mp4 sequence2.mp4
    echo Done!
) else (
    echo Crop failed!
)
