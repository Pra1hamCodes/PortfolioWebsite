#!/usr/bin/env python3
"""
Simple video cropping script.
Crops bottom 100px from sequence2.mp4 to remove watermark.
"""

import subprocess
import os
import sys

os.chdir(r'c:\Users\pande\PortfolioWebsite')

ffmpeg_bin = r'node_modules\ffmpeg-static\bin\win32\x64\ffmpeg.exe'
video_file = 'sequence2.mp4'

if not os.path.exists(ffmpeg_bin):
    print(f"Error: ffmpeg not found at {ffmpeg_bin}")
    sys.exit(1)

try:
    # First, get info
    print("Getting video info...")
    result = subprocess.run(
        [ffmpeg_bin, '-i', video_file],
        capture_output=True,
        text=True
    )
    
    # Parse dimensions from output
    import re
    lines = result.stderr.split('\n')
    video_line = [l for l in lines if 'Video:' in l]
    if video_line:
        print(f"Video info: {video_line[0][:100]}...")
    
    # Crop - remove bottom 100 pixels
    print("Cropping video (removing bottom 100px for watermark)...")
    subprocess.run(
        [ffmpeg_bin, 
         '-i', video_file,
         '-vf', 'crop=in_w:in_h-100',
         '-c:a', 'copy',
         'sequence2_cropped.mp4',
         '-y'],
        check=True
    )
    
    # Backup and replace
    print("Replacing original file...")
    os.rename(video_file, f'{video_file}.bak')
    os.rename('sequence2_cropped.mp4', video_file)
    
    print(f"✓ Done! Original backed up to {video_file}.bak")
    
except subprocess.CalledProcessError as e:
    print(f"Error: FFmpeg failed with code {e.returncode}")
except Exception as e:
    print(f"Error: {e}")
