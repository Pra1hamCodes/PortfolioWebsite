const { execSync } = require('child_process');
const path = require('path');

const ffprobePath = path.join(__dirname, 'node_modules/ffprobe-static/bin/win32/x64/ffprobe.exe');
const videoPath = path.join(__dirname, 'sequence2.mp4');

try {
  const output = execSync(`"${ffprobePath}" -v error -select_streams v:0 -show_entries stream=width,height -of default=noprint_wrappers=1 "${videoPath}"`, { encoding: 'utf8' });
  console.log(output);
} catch (err) {
  console.error('Error:', err.message);
}
