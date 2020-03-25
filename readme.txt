
ffmpeg command to transcode webm to mp4 without transpiling;
for i in *.webm; do ffmpeg -i "$i" -vcodec copy "${i%.*}.mp4"; done