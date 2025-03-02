const videoElement = document.getElementById('cover');
        const playBtn = document.getElementById('play');
        const prevBtn = document.getElementById('prev');
        const nextBtn = document.getElementById('next');
        const title = document.getElementById('title');
        const artist = document.getElementById('artist');
        const currentTimeEl = document.getElementById('current-time');
        const durationEl = document.getElementById('duration');
        const progress = document.querySelector('.progress');
        const progressContainer = document.querySelector('.progress-bar');
        const volumeSlider = document.getElementById('volume');
        const speedSelect = document.getElementById('speed');

        const videos = [
    { title: 'Statistics', artist: 'Mohamed', cover: 'https://via.placeholder.com/250/4CAF50/FFFFFF?text=Sample+Video+1', src: 'videoplayback.mp4' },
    { title: 'React JS', artist: 'Ustad Hamuda ', cover: 'https://via.placeholder.com/250/2196F3/FFFFFF?text=Big+Buck+Bunny', src: 'ReactJs MasterClass .mp4' },
];


        let videoIndex = 0;
        let isPlaying = false;
        let speed = 1;

        function loadVideo(video) {
            title.textContent = video.title;
            artist.textContent = video.artist;
            videoElement.src = video.src;
        }

        loadVideo(videos[videoIndex]);

        function playVideo() {
            playBtn.querySelector('i').classList.replace('fa-play', 'fa-pause');
            videoElement.play().catch(e => console.error("Error playing video:", e));
            isPlaying = true;
        }

        function pauseVideo() {
            playBtn.querySelector('i').classList.replace('fa-pause', 'fa-play');
            videoElement.pause();
            isPlaying = false;
        }

        function prevVideo() {
            videoIndex = (videoIndex - 1 + videos.length) % videos.length;
            loadVideo(videos[videoIndex]);
            playVideo();
        }

        function nextVideo() {
            videoIndex = (videoIndex + 1) % videos.length;
            loadVideo(videos[videoIndex]);
            playVideo();
        }

        function updateProgress() {
            const { duration, currentTime } = videoElement;
            if (isNaN(duration)) return;

            const progressPercent = (currentTime / duration) * 100;
            progress.style.width = `${progressPercent}%`;

            const durationMinutes = Math.floor(duration / 60);
            let durationSeconds = Math.floor(duration % 60);
            durationSeconds = durationSeconds < 10 ? `0${durationSeconds}` : durationSeconds;
            durationEl.textContent = `${durationMinutes}:${durationSeconds}`;

            const currentMinutes = Math.floor(currentTime / 60);
            let currentSeconds = Math.floor(currentTime % 60);
            currentSeconds = currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds;
            currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`;
        }

        function setProgress(e) {
            const width = progressContainer.clientWidth;
            const clickX = e.offsetX;
            const duration = videoElement.duration;
            const newTime = (clickX / width) * duration;

            if (isFinite(newTime)) {
                videoElement.currentTime = newTime;
            }
        }

        playBtn.addEventListener('click', () => {
            isPlaying ? pauseVideo() : playVideo();
        });
        prevBtn.addEventListener('click', prevVideo);
        nextBtn.addEventListener('click', nextVideo);
        videoElement.addEventListener('timeupdate', updateProgress);
        progressContainer.addEventListener('click', setProgress);
        videoElement.addEventListener('ended', nextVideo);
        volumeSlider.addEventListener('input', (e) => {
            videoElement.volume = e.target.value;
        });
        speedSelect.addEventListener('change', (e) => {
            speed = parseFloat(e.target.value);
            videoElement.playbackRate = speed;
        });
        videoElement.addEventListener('loadedmetadata', updateProgress);