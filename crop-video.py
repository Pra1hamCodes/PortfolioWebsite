import subprocess
import os

os.chdir(r'c:\Users\pande\PortfolioWebsite')

# Try to get video info using ffmpeg
try:
    result = subprocess.run(
        [r'node_modules\ffmpeg-static\bin\win32\x64\ffmpeg.exe', '-i', 'sequence2.mp4'],
        capture_output=True,
        text=True,
        timeout=5
    )
    output = result.stderr
    print("=== FFmpeg Output ===")
    print(output)
    
    # Extract resolution
    import re
    match = re.search(r'(\d{3,4})x(\d{3,4})', output)
    if match:
        width, height = int(match.group(1)), int(match.group(2))
        print(f"\nVideo dimensions: {width}x{height}")
        
        # Crop to remove bottom 80 pixels (common watermark location)
        crop_width = width
        crop_height = height - 80
        crop_cmd = f"crop={crop_width}:{crop_height}:0:0"
        print(f"Crop filter: {crop_cmd}")
        
        # Run ffmpeg to crop
        print("\nCropping video...")
        crop_result = subprocess.run(
            [r'node_modules\ffmpeg-static\bin\win32\x64\ffmpeg.exe', 
             '-i', 'sequence2.mp4',
             '-vf', crop_cmd,
             '-c:a', 'copy',
             'sequence2_cropped.mp4',
             '-y'],
            capture_output=True,
            text=True,
            timeout=30
        )
        
        if crop_result.returncode == 0:
            print("✓ Cropped successfully")
            # Backup and replace
            os.rename('sequence2.mp4', 'sequence2.mp4.bak')
            os.rename('sequence2_cropped.mp4', 'sequence2.mp4')
            print("✓ Original backed up and replaced")
        else:
            print("✗ Crop failed:", crop_result.stderr[-200:])
    else:
        print("Could not extract resolution from ffmpeg output")
        
except Exception as e:
    print(f"Error: {e}")
